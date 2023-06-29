const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema({
  invoiceNum: {
    type: String,
    required: true,
    unique: true,
  },
  productBarcode: {
    type: String,
    required: true,
  },
  unit_price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
    index: true, // Agrega esta línea
  },
  updatedAt: {
    type: Date,
    required: false,
    index: true, // Agrega esta línea
  },
}, {
  timestamps: true,
  collection: "shoppings", // Nombre de la colección en MongoDB
});

const Shopping = mongoose.model("Shopping", ShoppingSchema);

module.exports = { Shopping, ShoppingSchema };
