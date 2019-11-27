import React from 'react'

// want to display a few 'shortcut' items:
// 1) list of favorited passport categories, with links to their detail page
const Home = ({
  favorites   // array[object] or array[string] ?
}) => {
  return (
    <div>
      <h3>Home View</h3>
      {/* Try to include profile, category, category detail, notifcations, and all kinds of fun information! */}
      <br/>
      <div className="favorite-list">
        {favorites.map((favorite, index) => (
          <p key={index} style={{cursor:'pointer', borderBottom:'1px solid rgba(0,0,0,.05)', margin: 0,padding:'10px 0'}}
            onClick={() => console.log('id of clicked:', favorite.id)}>
            {favorite.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Home
