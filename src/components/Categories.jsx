import React from 'react'

//import components
import CategoryDetail from './CategoryDetail'

// list all categories. display some information like the title, stamps count, and if it's a favorite
const Categories = ({
  categoriesData,
  setFavorite
}) => {
  return (
    <div>
      <h3>Categories:</h3>
      <ul style={{listStyle:'none', padding: '10px'}}>
        {categoriesData.map((category, index) => (
          <CategoryDetail key={index} category={category} />
        ))}
      </ul>
    </div>
  )
}

export default Categories
