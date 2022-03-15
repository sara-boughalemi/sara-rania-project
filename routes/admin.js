const router = require("express").Router();
const Post = require("../models/Post");
const isAuth = require("../middlewares/isAuth");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.get("/", isAuth, async (req, res) => {
    try {
        if (req.user.role === "admin") {
            const users = await User.find({});
            res.json({ status: true, msg: "users", users });
        }
    } catch (error) {
        console.log(error);
    }
});

router.get("/current", isAuth, (req, res) => {
    if (req.user) {
        res.send({ status: true, msg: "Authorized", user: req.user });
    } else {
        res.send({ status: false, msg: "Unauthorized" });
    }
});

router.delete("/deleteUser/:id", isAuth, async (req, res) => {
    try {
        const { id } = req.params;
        let deleteUser = await User.findByIdAndDelete(id);
        res.json({ status: true, msg: "user deleteed", deleteUser });
    } catch (error) {
        res.json({ status: 500, msg: "error delete user" });
    }
});
router.delete("/deletePost/:id", isAuth, async (req, res) => {
    try {
        const { id } = req.params;
        let deletepost = await Post.findByIdAndDelete(id);
        res.json({ status: true, msg: "post deleteed", deletepost });
    } catch (error) {
        res.json({ status: 500, msg: "error delete post" });
    }
});
module.exports = router;
