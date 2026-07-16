const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  sku: {
    type: String
  },
  description: {
    type: String
  },
  catagory: {
    type: String
  },
  lowStockLevel: {
    type: Number,
    default: 10,
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);