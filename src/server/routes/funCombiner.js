const Task = require("../models/task");
const User = require("../models/user");
const express = require("express");
const router = express.Router();



router.post("/tasks", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

router.put("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
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
