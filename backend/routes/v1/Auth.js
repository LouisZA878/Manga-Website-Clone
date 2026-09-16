const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../../models/Users");
const Profile = require("../../models/Profile");

const ValidationArray = require("../../components/middleware/validationArray");
const {
  usernameBody,
  passwordBody,
  matchedData,
} = require("../../components/validators/validator");

const {
  createAccessToken,
  createRefreshToken,
} = require("../../components/utils/token");

router.post(
  "/signup",
  ValidationArray("Unauthorized access"),
  [usernameBody().isUsernameAvailable(), passwordBody()],
  async (req, res) => {
    try {
      const { password, username } = matchedData(req);

      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        password: hashedPassword,
      });

      const userSave = await newUser.save();

      if (userSave) {
        console.log("New user created: " + userSave.username);
      }

      const { _id } = userSave;
      const newProfile = new Profile({
        userId: new mongoose.Types.ObjectId(_id),
      });

      newProfile.save();

      res.status(201).send({
        description: "Succesfully signed up",
      });
    } catch (err) {
      console.error(err.message);
      res.status(400).send({
        description: "Unsuccesful signed up",
      });
    }
  },
);

router.post(
  "/signin",
  [usernameBody().isUsernameExist(), passwordBody()],
  ValidationArray("Unsuccessful sign in attempt"),
  async (req, res) => {
    try {
      const { password, username } = matchedData(req);
      const response = await User.findOne({ username });
      if (response) {
        const storedPassword = response.password;
        bcrypt.compare(password, storedPassword, (err, result) => {
          if (result) {
            const accessToken = createAccessToken(response._id);

            const refreshToken = createRefreshToken(response._id);

            res.cookie("refreshToken", refreshToken, {
              httpOnly: true,
              secure: false,
              sameSite: "lax",
              expires: new Date(Date.now() + 60 * 60 * 60 * 24 * 1 * 1000),
            });
            res.cookie("accessToken", accessToken, {
              secure: false,
              httpOnly: true,
              sameSite: "lax",
              expires: new Date(Date.now() + 15 * 60 * 1000),
            });

            return res.status(200).send({
              description: "Successfully signed in",
            });
          }

          if (err) {
            console.log(err.message);
            res.status(400).send({
              description: "Unsuccessful sign in attempt",
            });
          }
        });
      }
      if (!response) {
        return res.status(400).send({
          description: "Unsuccessful sign in attempt",
        });
      }
    } catch (err) {
      console.error(err.message);
      return res.status(400).send({
        description: "Unsuccessful sign in attempt",
      });
    }
  },
);

router.post("/signout", async (req, res) => {
  try {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    res.status(200).send({
      description: "Successfully signout out",
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).send({
      description: "Unsucessful signout attempt",
    });
  }
});

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies["refreshToken"];

  if (!refreshToken) {
    return res.status(401).send({
      description: "Unauthorized access",
    });
  }

  try {
    const { REFRESH_TOKEN_SIGNATURE } = process.env;
    const decodeRefreshToken = jwt.verify(
      refreshToken,
      REFRESH_TOKEN_SIGNATURE,
    );

    const { id } = decodeRefreshToken;
    const accessToken = createAccessToken(id);
    res.cookie("accessToken", accessToken, {
      secure: false,
      httpOnly: true,
      sameSite: "lax",
      expires: new Date(Date.now() + 15 * 60 * 1000),
    });
    res.status(200).send({
      description: "Tokens refreshed",
    });
  } catch (err) {
    console.error(err.message);
    res.status(401).send({
      description: "Unauthorized access",
    });
  }
});

module.exports = router;
