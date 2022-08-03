import { UserContext } from '../UserContext'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../globals'

const UpdateInfo = () => {
  const { user, setUser } = useContext(UserContext)
  const [userUpdateInput, setuserUpdateInput] = useState({
    Email: user ? user.Email : '',
    Password: user ? user.Password : '',
    Birthday: user ? user.Birthday : '',
    FirstName: user ? user.FirstName : '',
    LastName: user ? user.LastName : ''
  })

  const [deleteUser, setDeleteUser] = useState(false)

  const navigate = useNavigate()

  const submitUserInput = async (e) => {
    e.preventDefault()

    console.log(userUpdateInput)

    const newUser = await axios.put(
      `${BASE_URL}/user/${user._id}`,
      userUpdateInput
    )
    console.log(newUser)
    if (newUser.status === 200) {
      console.log(newUser.data)
      await setUser(newUser.data)
      console.log(user)
      e.target.reset()
    }
  }

  const handleChange = (e) => {
    setuserUpdateInput({
      ...userUpdateInput,
      [e.target.name]: e.target.value
    })
    console.log(userUpdateInput)
  }

  const deleteAccount = async () => {
    const res = await axios.delete(`/user/${user._id}`)
    console.log(res)

    setDeleteUser(true)
    setTimeout(() => {
      navigate(`/`)
    }, 3000)
  }

  console.log(user)
  return (
    <div className="create-account-main">
      {deleteUser === true ? <div>WE ARE SORRY TO LOSE YOU ....</div> : ''}{' '}
      <div />
      <h1>UPDAT PERSONAL DETAILS</h1>
      <div className="create-account-form">
        <form onSubmit={submitUserInput} className="create-account-form">
          <input
            type="text"
            name="FirstName"
            placeholder={user ? user.FirstName : 'FIRSTNAME'}
            onChange={handleChange}
          />
          <input
            type="text"
            name="LastName"
            placeholder={user ? user.LastName : 'LASTNAME'}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Birthday"
            placeholder={user ? user.Birthday : 'MM/DD/YYYY'}
            onChange={handleChange}
          />
          <input
            type="text"
            name="Email"
            placeholder={user ? user.Email : 'EMAIL'}
            onChange={handleChange}
          />
          <input
            type="password"
            name="Password"
            placeholder="PASSWORD"
            onChange={handleChange}
          />
          <div className="btn-box">
            <button name="updateBtn" className="btn update-btn">
              UPDATE
            </button>
            <button
              value="deleteBtn"
              onClick={deleteAccount}
              className="btn update-btn"
            >
              DELETE ACCOUNT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateInfo
