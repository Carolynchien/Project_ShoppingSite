import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Women = () => {
  const [women, setwomen] = useState([])

  useEffect(() => {
    const getwomen = async () => {
      let res = await axios.get(`/products`)
      let products = await res.data
      console.log(products)
      setwomen(products.products)
    }
    getwomen()
  }, [])

  const navigate = useNavigate()

  const findProduct = (product) => {
    navigate(`/women/products/details/${product._id}`)
  }

  console.log(women)

  return (
    <div className="women-page">
      <h1>WOMEN</h1>
      <div className="women">
        {women &&
          women.map((product, i) => (
            <div
              className="women-product"
              key={i}
              onClick={() => findProduct(product)}
            >
              <img src={product.image} alt=""></img>

              <p>{product.product}</p>
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
            </div>
          ))}
      </div>
    </div>
  )
}

export default Women
