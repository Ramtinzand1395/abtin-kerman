const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  tagName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Tag || mongoose.model("Tag", TagSchema);
