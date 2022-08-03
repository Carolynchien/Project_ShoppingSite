import './App.css'
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Women from './pages/Women'
import WProduct from './pages/WProductDetails'
import SignUP from './pages/SignUp'
import Cart from './pages/Cart'
import UpdateInfo from './pages/UpdateInfo'
import { useEffect, useState, useMemo, useContext } from 'react'
import Search from './pages/Search'
import Sale from './pages/Sale'
import { UserContext } from './UserContext'

let map = new Map()
function App() {
  const [cart, setCart] = useState(map)
  const [cartItemCount, setcartItemCount] = useState(0)
  const [user, setUser] = useState()
  const providerValue = useMemo(
    () => ({ user, setUser, cart, setCart, cartItemCount, setcartItemCount }),
    [user, cart, cartItemCount]
  )

  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <Header cartItemCount={cartItemCount} />
      </UserContext.Provider>

      <main>
        <UserContext.Provider value={providerValue}>
          <Routes>
            <Route exact path="/home" element={<Home />} />

            <Route exact path="/women" element={<Women />} />
            <Route
              exact
              path="/women/products/details/:id"
              element={<WProduct />}
            />
            <Route exact path="/signup" element={<SignUP />} />

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Cart" element={<Cart />} />

            <Route exact path="/sale" element={<Sale />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/userupdateInfo" element={<UpdateInfo />} />
          </Routes>
        </UserContext.Provider>
      </main>
    </div>
  )
}

export default App
