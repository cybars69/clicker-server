const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  score: { type: Number, default: 0 },
  prizes: { type: Array, default: [] },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
