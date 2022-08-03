import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Collection = () => {
  let navigate = useNavigate()

  const handleClick = () => {
    setTimeout(() => {
      navigate(`/sale`)
    }, 300)
  }

  const [collection, setCollection] = useState([])

  useEffect(() => {
    const getCollection = async () => {
      let res = await axios.get(`/getCollection`)
      let products = await res.data
      console.log(products)
      setCollection(products.products)
    }
    getCollection()
  }, [])

  const slideLeft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className="collection" id="collection">
      <div className="content scrollbar-hide">
        <MdChevronLeft className="pointer" onClick={slideLeft} size={40} />
        <div
          className="slider-box scrollbar-hide"
          id="slider"
          onClick={handleClick}
        >
          {collection.map((product) => (
            <img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={product.image}
            />
          ))}
        </div>
        <MdChevronRight className="pointer" onClick={slideRight} size={40} />
      </div>
    </div>
  )
}
export default Collection
