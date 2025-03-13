const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  address1: String,
  address2: String,
  city: String,
  postalCode: String,
  country: String,
  phoneNumber: String,
  email: String,
  notes: String
});

module.exports = mongoose.model("User", userSchema, "users");
