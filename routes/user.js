const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/isAuth");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    bcrypt.hash(password, 12, async (err, hash) => {
      if (err) {
        res.status(500).json({ status: false, message: err });
      } else if (hash) {
        const user = await User.create({
          userName,
          email,
          password: hash,
          role,
        });
        res.status(201).json({
          status: true,
          message: "user created",
          data: user,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: err });
  }
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, passwordMatch) => {
          if (err) throw err;
          if (passwordMatch === true) {
            jwt.sign({ user }, process.env.SECRETKEY, (err, token) => {
              res.json({
                status: true,
                msg: "logged in successfully",
                token: token,
              });
            });
          } else {
            res.json({
              status: false,
              msg: "wrong password",
            });
          }
        });
      } else {
        res.json({
          status: false,
          msg: "email doesn't exist",
        });
      }
    })
    .catch((err) => console.log(err));
});

router.get("/current", isAuth, (req, res) => {
  if (req.user) {
    res.send({ status: true, msg: "authorized", user: req.user });
  } else {
    res.send({ status: false, msg: "unauthorised" });
  }
});

module.exports = router;
