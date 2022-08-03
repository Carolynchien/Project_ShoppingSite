import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Search = () => {
  const [searchInput, setsearchInput] = useState('')
  const [products, setProduct] = useState([])

  const subMit = async (e) => {
    e.preventDefault()
    if (searchInput != '') {
      const products = await axios.post(`/searchproduct`, searchInput)
      console.log(products)
      setProduct(products.data)
      console.log(`afterset`, products)
      setsearchInput({})
    }
  }

  const handlerChange = (e) => {
    console.log(e.target.value)
    setsearchInput({ ...searchInput, [e.target.name]: e.target.value })
    console.log(searchInput)
  }
  const navigate = useNavigate()

  const findProduct = (product) => {
    navigate(`/women/products/details/${product._id}`)
  }
  return (
    <div className="search-main">
      <section className="search-box-main">
        <h1>SEARCH</h1>
        <div className="search-box">
          <form onSubmit={subMit}>
            <button>
              <i class="fas fa-search"></i>
            </button>

            <input
              type="text"
              placeholder="FIND WHAT IS IN YOUR MIND"
              name="product"
              onChange={handlerChange}
              onSubmit={subMit}
            />
          </form>
        </div>
      </section>

      <div className="search-product-box">
        {searchInput.length === 0 ? (
          <section className="link-box">
            <Link to="/search">TOP</Link>
            <Link to="/search">DRESS</Link>
            <Link to="/search">ACCESSORIES</Link>
          </section>
        ) : (
          ''
        )}

        {products &&
          products.map((product, i) => (
            <div
              className="search-product-single"
              key={i}
              onClick={() => findProduct(product)}
            >
              <img src={product.image} alt=""></img>

              <p>{product.product}</p>

              {product.isOnsale === true ? (
                <div>
                  <p className="original-price">${product.price} USD</p>
                  <p className="discount-price">${product.price} USD</p>
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

export default Search
