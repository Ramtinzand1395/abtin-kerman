const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  relatedModel: {
    type: String,
    enum: ["Product", "accountgame"], // Indicate the type of related document
    required: true,
  },
  isValidated: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
