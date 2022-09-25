import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../UserContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/fa'

const Header = () => {
  const { user, setUser, cartItemCount, setcartItemCount } =
    useContext(UserContext)
  const [click, setClick] = useState(false)

  const logout = () => {
    console.log(user)
    console.log(`log out`)
    setUser(null)
  }
  // console.log(user)

  const navigate = useNavigate()

  const updateInfo = () => {
    navigate(`/userupdateInfo`)
  }

  return (
    <div>
      <header className="header">
        {/* <div className="nav"> */}
        <ul>
          <li className="search">
            <Link to="/search">SEARCH</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li onClick={updateInfo}>
            {user ? <i class="fa-solid fa-user"></i> : ''}
          </li>
          <li>
            {user ? (
              <li className="log-out-btn" onClick={logout}>
                LOG OUT
              </li>
            ) : (
              <Link to="/login">SIGN IN</Link>
            )}
          </li>
          <li className="cart">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <span>{cartItemCount}</span>
          </li>
        </ul>
        {/* </div> */}
      </header>
    </div>
  )
}

export default Header
