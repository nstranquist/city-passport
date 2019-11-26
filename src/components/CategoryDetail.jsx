import React from 'react'


// details about general category (i.e. 'Coffee' or 'Music')
const CategoryDetail = ({
  category: {
    id,
    name,
    description,
    stamps,
    isFavorite,
  }
}) => {


  // should look like a card
  return (
    <div className='category-card'>
      <header className='card-header'>
        <div style={{display:'flex', alignItems:'center'}}>
          {isFavorite ? (
            <i className='icon-favorite'>star_border</i>
          ) : (
            <i className='icon-favorite'>star</i>
          )}
          <h4 style={{margin: '0 7px'}}>{name}</h4>
        </div>
        <p style={{color:'#666'}}>{description}</p>
      </header>
      <div className='card-body'>
        <ul className="stamps-list" style={{listStyle:'none', padding: 0}}>
          {stamps.length < 1 && 'No Stamps to Show! Start Collecting Them'}
          {stamps.length > 0 && stamps.map((stamp, index) => (
            <li key={index}>
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
