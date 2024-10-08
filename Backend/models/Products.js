const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: [
    {
      key: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  description: {
    type: String,
  },
  primaryImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    required: true,
  },
  comments:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  additionalImages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  sellOne: {
    type: Boolean,
    default: false,
  },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);
