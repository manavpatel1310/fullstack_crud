const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Display all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.render("list", { users });
});

// Add user page
router.get("/add", (req, res) => {
  res.render("add");
});

// Create user
router.post("/add", async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
});

// Update user page
router.get("/update/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("update", { user });
});

// Update user
router.post("/update/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

// Delete user
router.get("/delete/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
