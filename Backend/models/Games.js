const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  capacity: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  region: { type: String, required: true },
  primaryImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    required: true,
  },
  additionalImages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  multiplayer: { type: Boolean, default: false },
  info: { type: [infoSchema], required: true },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  sellOne: {
    type: Boolean,
    default: true,
  },
  comments:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.models.Games || mongoose.model("Games", gameSchema);
