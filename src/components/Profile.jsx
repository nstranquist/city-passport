import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

const Profile = ({
  updateProfile,
  profileData
}) => {
  const [nameInput, setNameInput] = useState('')

  const handleChange = (event) => {
    let nameValue = event.target.value
    setNameInput(nameValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('name input:', nameInput)

    updateProfile({
      name: nameInput
    })

    setNameInput('')
    return (
      <Redirect to='/categories' />
    )
  }

  return (
    <div>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Enter your name</label>
          <input type="text" value={nameInput} onChange={(event) => handleChange(event)} />
        </div>
        <button type="submit">Update</button>
      </form>
      <h3>Existing Profile Data:</h3>
      <div>name: {profileData.name}</div>
    </div>
  )
}

export default Profile
