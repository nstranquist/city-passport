import React from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'


// details about general category (i.e. 'Coffee' or 'Music')
const CategoryDetail = ({
  category: {
    id,
    name,
    description,
    stamps,
    isFavorite,
  },
  setFavorite,
}) => {

  const handleFavorite = () => {
    setFavorite(id)
  }

  // should look like a card
  return (
    <div className='category-card'>
      <header className='card-header'>
        <div style={{display:'flex', alignItems:'center'}}>
          {isFavorite ? (
            <MdStar color='#FFBB00' size={24} style={{cursor:'pointer'}}
              onClick={handleFavorite}
            />
          ) : (
            <MdStarBorder color='#333' size={24} style={{cursor:'pointer'}} 
              onClick={handleFavorite}  
            />
          )}
          <h4 style={{margin: '0 7px'}}>{name}</h4>
        </div>
        <p style={{color:'#666'}}>{description}</p>
      </header>
      <div className='card-body'>
        <ul className="stamps-list" style={{listStyle:'none', padding: 0}}>
          {stamps.length < 1 && 'No Stamps to Show! Start Collecting Them'}
          {stamps.length > 0 && stamps.map((stamp, index) => (
            <li key={index} style={{margin:'2% 0', paddingBottom:'2%', borderBottom:'1px solid rgba(0,0,0,.1)'}}>
              <div>{stamp.name}</div>
              <div>{stamp.location}</div>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default CategoryDetail
