const rolesAuth = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userRole)) {
      return res.status(403).send({
        description: "Unauthorized",
      });
    }
    next();
  };
};

module.exports = rolesAuth;
