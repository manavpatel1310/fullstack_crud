/**
 * Full Stack CRUD Application - User Management System
 * Name: Manav Patel
 * Student ID: C0932378
 * Date: 12-03-2025
 * Description: This is a full-stack web application using Node.js, Express, MongoDB, and Pug.
 * It allows users to Create, Read, Update, and Delete (CRUD) user details.
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/userModel");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

// ✅ Middleware Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

// ✅ Routes
app.use("/users", userRoutes);

// ✅ Home Route
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error loading homepage.");
  }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
