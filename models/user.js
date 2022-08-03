const db = require('../db')
const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Birthday: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = UserSchema
