const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Successfully connected to MongoDb')
  })
  .catch((e) => {
    console.log(`connection error`, e.message)
  })

mongoose.set('debug', true)

const db = mongoose.connection
module.exports = db
