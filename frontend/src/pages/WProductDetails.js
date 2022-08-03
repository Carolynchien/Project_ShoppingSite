import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../UserContext'

const initstate = {
  product: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: 0,
  inStock: '',
  _id: '',
  _v: ''
}

const WProduct = (props) => {
  const [product, setProduct] = useState(initstate)
  const [productId, setProductId] = useState('')
  const [item, setItem] = useState([])
  const { cart, setCart, cartItemCount, setcartItemCount } =
    useContext(UserContext)

  console.log(cartItemCount)
  let { id } = useParams()

  useEffect(() => {
    setProductId(id)
    async function getProductById() {
      const product = await axios.get(`/products/details/${productId}`)
      const productDetail = product.data.product
      console.log(productDetail)
      if (productDetail != undefined) {
        setProduct({
          ...initstate,
          _id: productDetail._id,
          product: productDetail.product,
          price: productDetail.price,
          description: productDetail.description,
          category: productDetail.category,
          image: productDetail.image,
          rating: productDetail.rating,
          isOnsale: productDetail.isOnsale,
          inStock: productDetail.inStock,
          _v: ''
        })
      }
    }

    getProductById()
  }, [productId])

  useEffect(() => {
    const productqty = () => {
      let item1 = [...item]

      cart.forEach((value, key) => {
        console.log(value)

        item.push({ product: key, qty: value })
      })
      console.log(item1)
      setItem(item1)
      console.log(item)
    }
    productqty()
  }, [cart])

  console.log(cart)
  

  const addToCart = (item) => {
    console.log(cart)
    let newMap = cart
    let hasSameItem = false

    if (newMap.size === 0) {
      newMap.set(item, 1)
    } else {
      for (const key of newMap.keys()) {
        if (key._id === item._id) {
          newMap.set(key, newMap.get(key) + 1)
          hasSameItem = true
        }
      }
      if (hasSameItem !== true) {
        newMap.set(item, 1)
      }
    }

    setCart(newMap)
    console.log(cart)
    let count = 0
    for (const value of cart.values()) {
      count += value
    }

    setcartItemCount(count)
  }

  return (
    <div className="product-detail-main">
      <div className="product-detail-image">
        <img src={product.image} alt=""></img>
      </div>

      <div className="product-detail-content">
        <h1>{product.product}</h1>

        {product.isOnsale === true ? (
          <div>
            <p className="original-price">${product.price} USD</p>
            <p className="discount-price">
              ${(product.price * 0.8).toFixed(2)} USD
            </p>
          </div>
        ) : (
          <p>${product.price} USD</p>
        )}

        {product.inStock <= 30 ? <p>Low in Stock</p> : ''}

        <p>{product.description}</p>
        <p>category: {product.category}</p>
        <p>Rating: {product.rating}</p>
        <button
          className="product-add-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
      {/* <section className="cart-render">
        <h2>CART</h2>
        {item &&
          item.map((item, i) => (
            <section className="cart-render-box">
              <h5>{item.product.product}</h5>
              <div className="cart-render-second-box">
                <img
                  src={item.product.image}
                  alt=""
                  className="cart-render-product-img"
                ></img>
                <div className="cart-render-product-content">
                  <p>{item.product.description}</p>

                  <p>
                    {item.qty} x {item.product.price} USD
                  </p>

                  <p></p>
                  <p></p>
                </div>
              </div>
            </section>
          ))}
        <button className="cart-render-btn">GO TO CART</button>
      </section> */}
    </div>
  )
}

export default WProduct
