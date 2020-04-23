// data/categories.data.js

import uuidv4 from 'uuid/v4'

export const categoriesData = [
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