import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../UserContext'
import { BASE_URL } from '../globals'

const Login = () => {
  const [userLogInInput, setuserLogInInput] = useState({
    Email: '',
    Password: ''
  })

  const [success, setSuccess] = useState()
  const { user, setUser } = useContext(UserContext)
  let navigate = useNavigate()

  useEffect(() => {
    setSuccess('')
  }, [userLogInInput])

  const loginIn = async (e) => {
    e.preventDefault()
    const user = await axios.post(`${BASE_URL}/finduser`, userLogInInput)
    console.log(user)
    if (user.data != null) {
      setUser(user.data)
      setSuccess(true)
      navigate(`/home`)
    } else {
      setSuccess(false)
      e.target.reset()
    }
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setuserLogInInput({ ...userLogInInput, [e.target.name]: e.target.value })
  }

  const createAaccount = () => {
    navigate(`/signup`)
  }

  return (
    <div className="login-main">
      <div className="login-main-box">
        <div className="login-section login-content">
          <h1>LOG IN</h1>
          <form value="" onSubmit={loginIn}>
            <div className="form-control">
              <input
                type="text"
                id="Email"
                value={userLogInInput.Email}
                name="Email"
                required
                onChange={handleChange}
              />
              <label htmlFor="Email">EMAIL</label>
            </div>

            <div className="form-control">
              <input
                type="password"
                value={userLogInInput.Password}
                name="Password"
                id="Password"
                onChange={handleChange}
                required
              />
              <label htmlFor="Password">PASSWORD</label>
            </div>
            {success === false ? (
              <p>Counld't find your accoun with us, create a account</p>
            ) : (
              ''
            )}

            <p>Use your email to log in</p>

            <button className="btn">LOG IN</button>
          </form>
        </div>

        <section className="create-account-section login-content">
          <h1>DON'T HAVE AN ACCOUNT? </h1>
          <p>Create a account to make shopping easier</p>
          <button className="btn" onClick={createAaccount}>
            CREATE ACCOUNT
          </button>
        </section>
      </div>
    </div>
  )
}

export default Login
