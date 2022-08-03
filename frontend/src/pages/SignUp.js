import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUP = () => {
  const [userSignUpInput, setuserSignUpInput] = useState({
    Email: '',
    Password: '',
    Birthday: '',
    FirstName: '',
    LastName: ''
  })
  const navigate = useNavigate()

  const submitUserInput = async (e) => {
    e.preventDefault()
    console.log(userSignUpInput)
    const newUser = await axios.post(`/user/createuser`, userSignUpInput)
    console.log(newUser)
    if (newUser) {
      e.target.reset()
    }
    navigate(`/login`)
  }

  const handleChange = (e) => {
    setuserSignUpInput({
      ...userSignUpInput,
      [e.target.name]: e.target.value
    })
    console.log(userSignUpInput)
  }

  console.log(userSignUpInput)
  return (
    <div className="create-account-main">
      <h1>PERSONAL DETAILS</h1>
      <div className="create-account-form">
        <form onSubmit={submitUserInput}>
          <input
            type="text"
            name="FirstName"
            placeholder="FIRST NAME"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="LastName"
            placeholder="LAST NAME"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="Birthday"
            placeholder="MM/DD/YYYY"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="Email"
            placeholder="EMAIL"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="Password"
            placeholder="PASSWORD"
            required
            onChange={handleChange}
          />

          <button className="btn">CREACTE ACCOUNT</button>
        </form>
      </div>
    </div>
  )
}

export default SignUP
