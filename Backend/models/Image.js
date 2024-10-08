const mongoose = require("mongoose");


const ImageSchema = new mongoose.Schema({
  imageName: {
    type: String,
  },
  direction: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.models.Image || mongoose.model("Image", ImageSchema);
