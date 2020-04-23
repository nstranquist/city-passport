import React, { useState } from 'react'
import { categoriesData } from '../data/categories.data'

//import components
import CategoryDetail from './CategoryDetail'

// list all categories. display some information like the title, stamps count, and if it's a favorite
const Categories = () => {
  const [categories, setCategories] = useState(categoriesData)

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
    setCategories(newCategories)
  }

  return (
    <div className="categories-page">
      <h3>Categories:</h3>
      <ul style={{listStyle:'none', padding: '10px'}}>
        {categories ? categories.map((category, index) => (
          <CategoryDetail
            key={index}
            category={category}
            setFavorite={setFavorite}
          />
        )) : (
          <div><p>loading categories...</p></div>
        )}
      </ul>
    </div>
  )
}

export default Categories
