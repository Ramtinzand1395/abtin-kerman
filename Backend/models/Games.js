const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  platform: { type: String, required: true }, // Example: 'ps5'
  capacity: { type: String, required: true }, // Example: 'ظرفیت دو'
  price: { type: Number, required: true }, // Example: 23
  qty: { type: Number, required: true }, // Example: 23
  inStock: { type: Boolean, default: true }, // Example: true
});

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Example: 'آهنگ جدید پیشرو'
  company: { type: String, required: true }, // Example: 'develoaper'
  region: { type: String, required: true }, // Example: 'کرمان'
  image: [
    {
      type: mongoose.Schema.Types.ObjectId, // Refers to Category by its ObjectId
      ref: "Image", // Reference to the Category model
    },
  ], // Array of image paths
  multypalyer: { type: Boolean, default: false }, // Example: false
  info: { type: [infoSchema], required: true }, // Nested info array
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId, // Refers to Category by its ObjectId
      ref: "Category", // Reference to the Category model
    },
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId, // Refers to Category by its ObjectId
      ref: "Tag", // Reference to the Category model
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.models.Games || mongoose.model("Games", gameSchema);
