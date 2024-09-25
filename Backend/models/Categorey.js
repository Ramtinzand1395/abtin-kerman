const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
