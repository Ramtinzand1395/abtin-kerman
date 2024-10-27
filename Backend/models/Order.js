const mongoose = require("mongoose");
const moment = require("moment-jalaali");

const SelectedPlatformSchema = new mongoose.Schema({
  platform: { type: String, default: null }, // Use String instead of string
  capacity: { type: String, default: null },
  price: { type: Number, default: null }, // Default to null
});

const ItemSchema = new mongoose.Schema({
  id: {
    // Reference to the product or game ID
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  ItemQty: {
    type: Number,
    required: true, // Assuming quantity is required
  },
  SelectedPlatform: SelectedPlatformSchema, // Use the defined schema for platform details
  itemType: {
    // Add a field to indicate the type of item
    type: String,
    enum: ["Products", "Games"], // Limit to specific types
    required: true,
  },
});

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [ItemSchema], // Using the ItemSchema defined above
  TrackingCode: {
    type: Number,
    required: true,
  },
  status:{
    type: String,
    enum: ["در انتظار تایید", "در حال بسته بندی" ,"تحویل داده شده"], 
    required: true,
    default:"در انتظار تایید"
  },
  createdAt: {
    type: Date,
    default: () => moment().format("jYYYY/jM/jD HH:mm:ss"),
  },
});

module.exports = mongoose.models.Order || mongoose.model("Order", OrderSchema);
