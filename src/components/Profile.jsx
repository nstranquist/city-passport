import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'


const Profile = ({
  updateProfile,
  profileData
}) => {
  // TODO: combine to one state object, implement useEffect() and memoization
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState(0)
  const [cityInput, setCityInput] = useState('')

  // add useEffect(() => {  }, [])  here

  // TODO: could optimize function to take all 3 inputs
  const handleNameChange = (event) => setNameInput(event.target.value)
  const handleAgeChange = (event) => setAgeInput(event.target.value)
  const handleCityChange = (event) => setCityInput(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('name input:', nameInput)

    updateProfile({
      name: nameInput,
      age: ageInput,
      city: cityInput
    })

    clearForm()
  }

  const clearForm = () => {
    setNameInput('')
    setAgeInput(0)
    setCityInput('')
  }

  return (
    <div>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Enter your name</label>
          <input type="text" value={nameInput} onChange={(event) => handleNameChange(event)} />
        </div>
        <div className="form-item">
          <label>Enter your age</label>
          <input type="number" value={ageInput} onChange={(event) => handleAgeChange(event)} />
        </div>
        <div className="form-item">
          <label>Enter your city</label>
          <input type="text" value={cityInput} onChange={(event) => handleCityChange(event)} />
        </div>
        <button type="submit">Update</button>
      </form>
      <h3>Existing Profile Data:</h3>
      <div>{profileData.name}</div>
      <div>{profileData.age}</div>
      <div>{profileData.city}</div>
    </div>
  )
}

export default Profile
