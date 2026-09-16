const { validationResult } = require("../validators/validator");
const ValidationArray = (description) => (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    if (process.env.NODE_ENV !== "PRODUCTION") {
      console.log(result.array());
    }

    return res.status(400).send({
      description,
    });
  }

  next();
};

module.exports = ValidationArray;
