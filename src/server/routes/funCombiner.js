const Post = require("../models/post");
const User = require("../models/user");
const express = require("express");
const router = express.Router();



router.post("/posts", async (req, res) => {
    try {
        const post = await new Post(req.body).save();
        res.send(post);
    } catch (error) {
        res.send(error);
    }
});

router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        res.send(error);
    }
});

router.put("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(post);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.send(post);
    } catch (error) {
        res.send(error);
    }
});
////////////////////////////////////
router.post("/users", async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
});

router.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});



module.exports = router;
