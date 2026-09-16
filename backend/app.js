require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { json } = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(json());
app.use(cookieParser());

const start = async () => {
  try {
    const { PORT, DB_URI, DB_USER, DB_USER_PASSWORD } = process.env;
    app.listen(PORT, () => {
      console.log(`Server run on port: ${PORT}`);
    });
    mongoose
      .connect(DB_URI, {
        user: DB_USER,
        pass: DB_USER_PASSWORD,
        // authSource: "admin",
      })
      .then(() => console.log("DB running"))
      .catch((err) =>
        console.error(
          `MongoDB instance could not start due to: ${err.message}`,
        ),
      );
  } catch (err) {
    console.error(err.message);
  }
};
start();

const { API } = process.env;

const Auth = require("./routes/v1/Auth");
const Profile = require("./routes/v1/Profile");

app.use(API + "/auth", Auth);
app.use(API + "/profile", Profile);
