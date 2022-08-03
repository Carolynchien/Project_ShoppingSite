import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

const Cart = (props) => {
  // const { cart } = props

  const [item, setItem] = useState([])
  // const [updateCart, setUpdateCart] = useState(cart)
  const { cart, setCart, cartItemCount, setcartItemCount } =
    useContext(UserContext)
  // console.log(cart)

  useEffect(() => {
    // console.log(cart)

    productqty()
  }, [])

  const productqty = () => {
    let item1 = [...item]

    cart.forEach((value, key) => {
      // console.log(value)

      item1.push({ product: key, qty: value })
    })
    // console.log(item1)
    setItem(item1)
  }

  const addItem = (i) => {
    let updateCart = cart
    let upDateItem = [...item]
    let upCartItemCount = cartItemCount
    console.log(upDateItem[i])
    upDateItem[i].qty++
    upCartItemCount++
    console.log(upDateItem[i])
    updateCart.set(upDateItem[i].product, upDateItem[i].qty)

    setItem(upDateItem)
    setCart(updateCart)
    setcartItemCount(upCartItemCount)
    console.log(updateCart)
  }

  const removeItem = (i) => {
    let updateCart = cart
    let upDateItem = [...item]
    let upCartItemCount = cartItemCount
    console.log(upDateItem[i])
    upDateItem[i].qty--
    upCartItemCount--
    console.log(upDateItem[i])
    // console.log(upDateItem)
    setItem(upDateItem)
    setcartItemCount(upCartItemCount)
    updateCart.set(upDateItem[i].product, upDateItem[i].qty)
    console.log(updateCart)
    if (upDateItem[i].qty === 0) {
      updateCart.delete(upDateItem[i].product)
      upDateItem.splice(i, 1)

      console.log(`size`, updateCart.size)

      console.log(cart)
    }

    setCart(updateCart)
    setcartItemCount(upCartItemCount)
  }

  return (
    <div className="cart-main-page">
      <h2>CART</h2>

      {cart.size === 0 ? <p className="cart-empty">Your cart is empty</p> : ''}

      {item.map((item, i) => (
        <section className="cart-main-box">
          <h5>{item.product.product}</h5>
          <div className="cart-second-box">
            <img
              src={item.product.image}
              alt=""
              className="cart-product-img"
            ></img>
            <div className="cart-product-content">
              <p>{item.product.description}</p>
              <button onClick={() => removeItem(i)}> – </button>
              <span>{item.qty}</span>
              <button onClick={() => addItem(i)}> + </button>
              <p>
                {item.qty} x {item.product.price} USD
              </p>
              <p>{(item.qty * item.product.price).toFixed(2)} USD</p>
              <p></p>
              <p></p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Cart
