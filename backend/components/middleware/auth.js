const jwt = require("jsonwebtoken");

const { createAccessToken } = require("../utils/token");

const { ACCESS_TOKEN_SIGNATURE, REFRESH_TOKEN_SIGNATURE } = process.env;

const Auth = async (req, res, next) => {
  const accessToken = req.cookies["accessToken"];

  if (!accessToken) {
    return res.status(401).send({
      description: "Unauthorized access",
    });
  }

  try {
    const decodeAccessToken = jwt.verify(accessToken, ACCESS_TOKEN_SIGNATURE);
    req.userId = decodeAccessToken.id;

    return next();
  } catch (err) {
    if (!accessToken) {
      console.log("No access token provided");
    }
    try {
      const decodeRefreshToken = jwt.verify(
        refreshToken,
        REFRESH_TOKEN_SIGNATURE,
      );

      const { id } = decodeRefreshToken;
      const accessToken = createAccessToken(id);

      res.cookie("accessToken", accessToken, {
        secure: false,
        httpOnly: true,
        sameSite: "",
        expires: new Date(Date.now() + 15 * 60 * 1000),
      });

      req.userId = id;

      return next();
    } catch (err) {
      res.status(401).send({
        description: "Unauthorized access",
      });
    }
  }
};

module.exports = Auth;
