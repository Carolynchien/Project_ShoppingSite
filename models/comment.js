const db = require(`../db`)
const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const CommenstSchema = new Schema(
  {
    author: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: String, required: true },
    product: { type: mongoose.Types.ObjectId, ref: 'Product' }
  },
  { timestamps: true }
)

module.exports = CommenstSchema
