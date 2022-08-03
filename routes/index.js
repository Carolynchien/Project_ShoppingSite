const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => {
  res.send('this is root!!!')
})

router.get('/products', controllers.getALLProducts)
router.get('/products/details/:id', controllers.findProductByid)
router.get('/salesproducts', controllers.getSaleProducts)
router.get('/getcollection', controllers.getCollections)

router.post('/user/createuser', controllers.createUser)
router.post('/finduser', controllers.findUser)
router.post('/searchproduct', controllers.searchProduct)

router.put('/user/:id', controllers.updateUser)
router.delete('/user/:id', controllers.deleteUser)

module.exports = router
