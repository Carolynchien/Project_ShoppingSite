const db = require(`../db`)
const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const ProductsSchema = new Schema({
  product: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: false },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  inStock: { type: Number, required: true },
  isOnsale: { type: Boolean, default: false, required: true },
  isCollection: { type: Boolean, default: false, required: true },
  comments: { type: mongoose.Types.ObjectId, ref: 'Comment' }
})

module.exports = ProductsSchema
