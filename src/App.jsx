import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { PassportRoutes } from './Routes'
// import components
import Profile from './components/Profile'

import './App.css'

const App = () => {
  const [profileData, setProfileData] = useState({})  // will container 'name', 'age', 'city'

  const updateProfile = (formData) => {
    setProfileData({
      name: formData.name,
      //age: ,
      //city: ,
    })
    console.log('profile data:', profileData)
  }

  const MyProfile = (props) => {
    return (
      <Profile 
        updateProfile={updateProfile}
        profileData={profileData}
        {...props}
      />
    )
  }

  return (
    <div className="page-container">
      <main className="content-container">
        <header className="content-header">
          {/* TODO: update section title with current page with react-router 'withParams' HOC */}
          <h2>Section Title</h2>
          <nav className='header-nav'>
            <Link to='/categories' className='nav-link'>Home</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
            <Link to='/profile' className='nav-link'>Profile</Link>
            <Link to='/profile' className='nav-link'>
              <div className="circle-profile"></div>
            </Link>
          </nav>
        </header>
        <div className="content-view">
          <PassportRoutes MyProfile={MyProfile} />
        </div>
      </main>
    </div>
  );
}

export default App;


// OLD CODE:
// {/* <div className="sidebar-container"> */}
//         {/* Top Profile Link, display name */}
//         {/* Sidebar */}
//         {/* List of Links */}

//       {/* </div> */}