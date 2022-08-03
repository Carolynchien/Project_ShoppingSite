import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Sale = () => {
  const [salesProduct, setsalesProduct] = useState([])

  useEffect(() => {
    const getsalesProduct = async () => {
      let res = await axios.get(`/salesproducts`)
      let products = await res.data
      console.log(products)
      setsalesProduct(products.products)
    }
    getsalesProduct()
  }, [])

  const navigate = useNavigate()

  const findProduct = (product) => {
    navigate(`/women/products/details/${product._id}`)
  }

  console.log(salesProduct)

  return (
    <div className="sales">
      <h1>SALE</h1>
      <div className="sales-page">
        {salesProduct &&
          salesProduct.map((product, i) => (
            <div
              className="sales-product"
              key={i}
              onClick={() => findProduct(product)}
            >
              <img src={product.image} alt=""></img>

              <p>{product.product}</p>

              <p className="original-price">${product.price} USD</p>
              <span className="discount-price">
                ${(product.price * 0.8).toFixed(2)} USD
              </span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Sale
