import React from 'react'
import Stamp from './Stamp'

// want to display a few 'shortcut' items:
// 1) list of favorited passport categories, with links to their detail page
const Home = ({
  favorites,   // array[object] or array[string] ?
  stamps
}) => {
  return (
    <div>
      <h3>Home View</h3>
      {/* Try to include profile, category, category detail, notifcations, and all kinds of fun information! */}
      <br/>
      <h5>Favorites</h5>
      <div className="favorite-list">
        {favorites.map((favorite, index) => (
          <p key={index} style={{cursor:'pointer', borderBottom:'1px solid rgba(0,0,0,.05)', margin: 0,padding:'10px 0'}}
            onClick={() => console.log('id of clicked:', favorite.id)}>
            {favorite.name}
          </p>
        ))}
      </div>
      <h5>Your Stamps</h5>
      {stamps.length > 0 && stamps.map((stamp, index) => (
        <Stamp key={index} stamp={stamp} />
      ))}
    </div>
  )
}

export default Home
