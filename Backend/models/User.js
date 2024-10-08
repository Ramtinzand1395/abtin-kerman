const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    maxlength: [225, "نام و نام خانوادگی نباید بیشتر از 225 کاراکتر باشد"],
    minlength: [3, "نام و نام خانوادگی نباید کمتر از 3 کاراکتر باشد"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
    default: false,
  },
  profile: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.models.User || mongoose.model("User", userSchema);
