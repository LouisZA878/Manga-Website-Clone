const mongoose = require("mongoose");
const { GridFSBucket, ObjectId } = require("mongodb");
const stream = require("stream");
const multer = require("multer");
const express = require("express");
const router = express.Router();

const auth = require("../../components/middleware/auth");
const Profile = require("../../models/Profile");

const { body, matchedData } = require("../../components/validators/validator");
const validationArray = require("../../components/middleware/validationArray");

// Creates the storage instance
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Uploads file(s) to MongoDB
async function uploadToGridFS(collection, file) {
  const conn = mongoose.connection;
  const bucket = new GridFSBucket(conn.db, {
    bucketName: collection,
  });

  const bufferStream = stream.Readable.from(file.buffer);
  const uploadStream = bucket.openUploadStream(file.originalname, {
    metadata: {
      mimetype: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    bufferStream
      .pipe(uploadStream)
      .on("error", reject)
      .on("finish", () => resolve(uploadStream));
  });
}

// Fetch the specified file
const FecthFile = (collection, id) => {
  const conn = mongoose.connection;
  const bucket = new GridFSBucket(conn.db, {
    bucketName: collection,
  });

  const fileId = ObjectId.createFromHexString(id);
  const downloadStream = bucket.openDownloadStream(fileId);

  return downloadStream;
};

// Delete specified file
async function deleteFile(collection, id) {
  try {
    const conn = mongoose.connection;
    const bucket = new GridFSBucket(conn.db, {
      bucketName: collection,
    });

    const fileId = new mongoose.Types.ObjectId(id);

    await bucket.delete(fileId);

    if (process.env.NODE_ENV !== "PRODUCTION") {
      console.log(`Successfully deleted file with ID: ${id}`);
    }
  } catch (err) {
    console.error("Error deleting file:" + err.message);
    throw new Error("Error deleting file:" + err.message);
  }
}

// Upload / Update avatar
router.patch(
  "/avatar/upload",
  auth,
  upload.single("file"),
  async (req, res) => {
    try {
      const { AVATAR_COLLECTION } = process.env;
      if (!req.file) {
        return res.status(400).send({ description: "No file found" });
      }

      const image_mimes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/jpg",
      ];
      if (!image_mimes.includes(req.file.mimetype)) {
        return res
          .status(400)
          .send({ description: "This file type is not allowed" });
      }

      // Deletes the previous avatar before adding the new one
      const { avatarId } = await Profile.findOne({
        userId: new mongoose.Types.ObjectId(req.userId),
      }).select("avatarId");
      deleteFile(AVATAR_COLLECTION, avatarId);

      const result = await uploadToGridFS(AVATAR_COLLECTION, req.file);

      await Profile.findOneAndUpdate(
        {
          userId: new mongoose.Types.ObjectId(req.userId),
        },
        {
          avatarId: new mongoose.Types.ObjectId(result.id),
        },
      );

      res.status(200).send({
        description: "Successfully uploaded avatar",
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).send({
        description: "Could not upload avatar",
      });
    }
  },
);

// Image is hosted on the server
// Can be viewed in the browser via url
router.get("/avatar/:id", auth, async (req, res) => {
  try {
    const { AVATAR_COLLECTION } = process.env;
    const downloadStream = FecthFile(AVATAR_COLLECTION, req.params.id);

    downloadStream.on("file", (file) => {
      res.setHeader("Content-Type", file.metadata.mimetype);
    });

    downloadStream.on("error", (err) => {
      console.error(err.message);
      res.status(404).send({ description: "Avatar not found" });
    });

    downloadStream.pipe(res);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ description: "Error fetching avatar" });
  }
});

// Delete avatar
router.delete("/avatar/:id", auth, async (req, res) => {
  try {
    const { AVATAR_COLLECTION } = process.env;

    const { avatarId } = await Profile.findOne({
      userId: new mongoose.Types.ObjectId(req.userId),
    }).select("avatarId");
    deleteFile(AVATAR_COLLECTION, avatarId);

    await Profile.findOneAndUpdate(new mongoose.Types.ObjectId(req.userId), {
      avatarId: "",
    });

    res.status(200).send({
      description: "Successfully deleted avatar",
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).send({ description: "Error deleting avatar" });
  }
});

router.patch(
  "/edit",
  auth,
  [
    body("linkedinSocials").optional().escape(),
    body("youtubeSocials").optional().escape(),
    body("bio").optional().escape(),
    body("filter").optional().escape().isFilterValid(),
  ],
  validationArray("Could not access route"),
  async (req, res) => {
    try {
      const result = matchedData(req);

      let updateObj = {};

      if (result["bio"]) {
        updateObj["bio"] = result["bio"];
      }
      if (result["filter"]) {
        updateObj["filter"] = result["filter"];
      }
      if (result["linkedinSocials"]) {
        updateObj["socials"] ??= {};
        updateObj["socials"]["linkedIn"] = result["linkedinSocials"];
      }
      if (result["youtubeSocials"]) {
        updateObj["socials"] ??= {};
        updateObj["socials"]["youtube"] = result["youtubeSocials"];
      }

      await Profile.findOneAndUpdate(
        {
          userId: new mongoose.Types.ObjectId(req.userId),
        },
        updateObj,
      );

      res.status(200).send({
        description: "Successfully updated profile",
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).send({ description: "Could not update profile" });
    }
  },
);

module.exports = router;
