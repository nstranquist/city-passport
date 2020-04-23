import React, { useState, useEffect } from 'react'
import Stamp from './Stamp'
import { categoriesData } from '../data/categories.data'

// want to display a few 'shortcut' items:
// 1) list of favorited passport categories, with links to their detail page
const Home = () => {
  const [stamps, setStamps] = useState(undefined)
  const [favorites, setFavorites] = useState(undefined)

  useEffect(() => {
    getStamps()
    setFavorites(getFavorites())
  }, [])

  // get all stamps from all categories
  const getStamps = async () => {
    let newStamps = [];
    newStamps = await Promise.all(categoriesData.map(async category => {
      console.log('category name:', category.name)
      if(category.stamps.length > 0) 
      {
        [].push.apply(newStamps, category.stamps);
      }
    }))

    console.log('new stamps:', newStamps)

    // setStamps(newStamps)
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

  return (
    <div className="home-page">
      <h3>Home View</h3>
      {/* Try to include profile, category, category detail, notifcations, and all kinds of fun information! */}
      <br/>
      <h5>Favorites</h5>
      <div className="favorite-list">
        {favorites ? favorites.map((favorite, index) => (
          <p key={index} style={{cursor:'pointer', borderBottom:'1px solid rgba(0,0,0,.05)', margin: 0,padding:'10px 0'}}
            onClick={() => console.log('id of clicked:', favorite.id)}>
            {favorite.name}
          </p>
        )) : ( <div><p>loading favorites...</p></div> )}
      </div>
      <h5>Your Stamps</h5>
      {stamps && stamps.map((stamp, index) => (
        <Stamp key={index} stamp={stamp} />
      ))}
    </div>
  )
}

export default Home
