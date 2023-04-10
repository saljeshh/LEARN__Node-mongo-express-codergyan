const mongoose = require("mongoose");

//Schema
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [5, "Discount must be min 5%"],
    max: [50, "Cant do more than 50%"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong rating"],
    max: [5, "Cant do more than 5"],
  },
  stock: {
    type: Number,
    min: [0, "Cant be negative"],
    defaultValue: 1,
  },
  brand: String,
  category: {
    type: String,
    enum: ["SmartPhone", "Laptop", "Keyboard", "Mouse"],
  },
  thumbnail: String,
  images: [String],
});

// making model from schema
exports.Product = mongoose.model("Productt", productSchema);
