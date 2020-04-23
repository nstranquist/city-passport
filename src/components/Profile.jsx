

import React, { useState, useEffect } from 'react'


const emptyProfileForm = {
  name: "",
  age: 0,
  city: ""
}

const Profile = () => {
  // TODO: combine to one state object, implement useEffect() and memoization
  const [profileData, setProfileData] = useState(emptyProfileForm)

  useEffect(() => {
    // make api call

      // then:
      // updateProfileData();
  }, [])

  // TODO: could optimize function to take all 3 inputs
  const handleChange = (e, name) => {
    setProfileData({
      ...profileData,
      [name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // error check if needed

    // submit data
    console.log('form data:', profileData.toString())

    clearForm()
  }

  const clearForm = () => {
    setProfileData(emptyProfileForm)
  }

  return (
    <div className="profile-page">
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Enter your name</label>
          <input type="text" value={profileData.name} onChange={(e) => handleChange(e, "name")} />
        </div>
        <div className="form-item">
          <label>Enter your age</label>
          <input type="number" value={profileData.age} onChange={(e) => handleChange(e, "age")} />
        </div>
        <div className="form-item">
          <label>Enter your city</label>
          <input type="text" value={profileData.city} onChange={(e) => handleChange(e, "city")} />
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
