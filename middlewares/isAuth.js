const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.header("authorization");
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    req.user = decoded.user;
     next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = isAuth;
