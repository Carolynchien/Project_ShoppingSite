const mongoose = require('mongoose')
const CommenstSchema = require('./comment')
const ProductsSchema = require('./product')
const UserSchema = require('./user')

const Product = mongoose.model('product', ProductsSchema)
const Comment = mongoose.model('comment', CommenstSchema)
const User = mongoose.model('user', UserSchema)
module.exports = { Product, Comment, User }
