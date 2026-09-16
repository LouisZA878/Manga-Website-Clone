const mongoose = require("mongoose");
const { ExpressValidator } = require("express-validator");

const User = require("../../models/Users");

// Custom middleware

const { body, validationResult, matchedData } = new ExpressValidator({
  isUsernameAvailable: async (value) => {
    const user = await User.findOne({ username: value });

    if (user) {
      throw new Error("Identical username detected");
    }
    return true;
  },
  isUsernameExist: async (value) => {
    const user = await User.findOne({ username: value });

    if (!user) {
      throw new Error("No user detected");
    }
    return true;
  },
  isFilterValid: (value) => {
    const filters = ["safe", "mild", "graphic"];

    if (!filters.includes(value)) {
      throw new Error(
        "Only the following filter options are available: safe, mild, graphic",
      );
    }
    return true;
  },
});

// Extended middleware

const usernameBody = () =>
  body("username").notEmpty().withMessage("Username must be valid").escape();
const passwordBody = () =>
  body("password").notEmpty().withMessage("Password must be valid").escape();

// Optional updates
// const linkedinSocials = body("linkedinSocials").optional().escape();
// const youtubeSocials = body("youtubeSocials").optional().escape();

// const bio = body("bio").optional().escape();
// const filter = body("filter").optional().escape();

module.exports = {
  usernameBody,
  passwordBody,

  body,

  validationResult,
  matchedData,
};
