import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import { PassportRoutes } from './Routes'
// import components
import Profile from './components/Profile'
import Categories from './components/Categories'

import './App.css'

const categories = [
  {
    id: uuidv4(),
    name: 'Coffee',
    description: 'Get your caffeine rush flowing!',
    stamps: [],
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Food',
    description: 'Get your favorite eats stamped',
    stamps: [],
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Music',
    description: 'Concerts, Radios, and more! Music can help define the culture of a city',
    stamps: [],
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Attractions',
    description: 'See some of the attractions your city is famous for!',
    stamps: [],
    isFavorite: false,
  }
]

const App = () => {
  const [profileData, setProfileData] = useState({})  // will container 'name', 'age', 'city'
  const [categoriesData, setCategoriesData] = useState(categories)

  const updateProfile = (formData) => {
    setProfileData({
      name: formData.name,
      age: formData.age,
      city: formData.city,
    })
    console.log('profile data:', profileData)
  }
  const setFavorite = (categoryId) => {
    // find category by id in our categoriesData array

    // update category 'isFavorite' property
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

  const MyCategories = (props) => {
    return (
      <Categories
        setFavorite={setFavorite}
        categoriesData={categoriesData}
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
            <Link to='/home' className='nav-link'>Home</Link>
            <Link to='/categories' className='nav-link'>Categories</Link>
            <Link to='/profile' className='nav-link'>Profile</Link>
            
            {/* Can toggle a dropdown, shortcut to logout, settings, donate, etc */}
            <div className="circle-profile nav-link" style={{cursor:'pointer'}}></div>
          </nav>
        </header>
        <div className="content-view">
          <PassportRoutes MyProfile={MyProfile} MyCategories={MyCategories} />
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