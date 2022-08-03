const { Product } = require('../models')
const { User } = require('../models')

const getALLProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.json({ products })
  } catch (e) {
    return res.send(e.message)
  }
}

const findProductByid = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    if (product) {
      return res.json({ product })
    } else {
      return res.send(`this id is not exiting`)
    }
  } catch (e) {
    return res.send(e.message)
  }
}

const getSaleProducts = async (req, res) => {
  try {
    const products = await Product.find({ isOnsale: 'true' })
    console.log(products)
    res.json({ products })
  } catch (e) {
    return res.send(e.message)
  }
}

const getCollections = async (req, res) => {
  try {
    const products = await Product.find({ isCollection: 'true' })
    console.log(products)
    res.json({ products })
  } catch (e) {
    return res.send(e.message)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = await new User(req.body)
    await newUser.save()
    console.log(newUser)
    res.send(`creating user data`)
  } catch (e) {
    return res.send(e.message)
  }
}

const findUser = async (req, res) => {
  try {
    console.log('this is console', req.body)
    const user = await User.findOne(req.body)

    console.log(user)
    res.status(200).json(user)
  } catch (e) {
    return res.status(500).send(error.message)
  }
}
const searchProduct = async (req, res) => {
  try {
    const searchWord = req.body.product
    const product = await Product.find({
      product: { $regex: searchWord, $options: 'i' }
    })
    console.log(product)
    res.status(200).json(product)
  } catch (e) {
    return res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(updateUser)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getALLProducts,
  findProductByid,
  createUser,
  findUser,
  searchProduct,
  getSaleProducts,
  updateUser,
  deleteUser,
  getCollections
}
