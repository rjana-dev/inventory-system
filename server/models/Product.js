const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  costPrice: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  sku: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  initialStockLevel: {
    type: Number,
    required: true
  },
  lowStockLevel: {
    type: Number,
    default: 10,
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);