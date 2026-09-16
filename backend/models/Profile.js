const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    avatarId: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
    },
    bio: {
      type: String,
      default: "",
    },
    socials: {
      linkedIn: {
        type: String,
        default: "",
      },
      youtube: {
        type: String,
        default: "",
      },
    },
    followedGroupsIds: {
      type: [String],
      default: [],
    },
    followedTitlesIds: {
      type: [String],
      default: [],
    },
    readHistoryIds: {
      type: [String],
      default: [],
    },
    collectionIds: {
      type: [String],
      default: [],
    },
    comments: {
      type: [String],
      default: [],
    },
    uploadedComicsIds: {
      type: [String],
      default: [],
    },
    filter: {
      type: String,
      enum: ["graphic", "safe", "mild"],
      default: "safe",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Profile", profileSchema);
