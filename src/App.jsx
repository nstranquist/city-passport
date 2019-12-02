import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import { PassportRoutes } from './Routes'
// import components
import Profile from './components/Profile'
import Categories from './components/Categories'
import Home from './components/Home'

import './App.css'

const categories = [
  {
    id: uuidv4(),
    name: 'Coffee',
    description: 'Get your caffeine rush flowing!',
    stamps: [
      {
        id: uuidv4(),
        name: 'Starbucks',
        // do we need a category for every stamp?
        category: 'Coffee',
        location: 'downtown',
        date: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Kaldis Coffee',
        category: 'Coffee',
        location: 'central west end',
        date: new Date(),
      }
    ],
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Food',
    description: 'Get your favorite eats stamped',
    stamps: [
      {
        id: uuidv4(),
        name: 'Starbucks',
        category: 'Food',
        location: 'downtown',
        date: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Kaldis Coffee',
        category: 'Food',
        location: 'central west end',
        date: new Date(),
      }
    ],
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Music',
    description: 'Concerts, Radios, and more! Music can help define the culture of a city',
    stamps: [
      {
        id: uuidv4(),
        name: 'Starbucks',
        category: 'Music',
        location: 'downtown',
        date: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Kaldis Coffee',
        category: 'Music',
        location: 'central west end',
        date: new Date(),
      }
    ],
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

  const setFavorite = (id) => {
    let newCategories = []
    categoriesData.map(category => {
      if(category.id === id) {
        let selected = category // watch for shallow copy
        console.log('selected:', selected, 'name:',selected.name)
        selected.isFavorite = !selected.isFavorite
        newCategories.push(selected)
      }
      else newCategories.push(category)
    })
    console.log('new categories:', newCategories)
    setCategoriesData(newCategories)
  }
  const getFavorites = () => {
    return categoriesData.filter(category => {
      if(category.isFavorite) {
        return {
          id: category.id,
          name: category.name
        }
      }
    })
  }
  const getStamps = () => {
    let stamps = 'stamps loading'
    stamps = categoriesData.map(category => {
      if(category.stamps.length > 0)
        return category.stamps
    })
    return stamps
  }

  // TODO: move component creators to a utility function (or the component they create)
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
  const MyHome = (props) => {
    return (
      <Home
        favorites={getFavorites()}
        stamps={getStamps()}
        {...props}
      />
    )
  }

  // TODO: use match.params to set header title according to our current page
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
          <PassportRoutes MyProfile={MyProfile} MyCategories={MyCategories} MyHome={MyHome} />
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