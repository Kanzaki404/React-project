import React, { useState } from 'react'

const FavItems = ({ favData, favDataPlanets, remFav }) => {
  const [cat, setCat] = useState('all')
  const elements = favData.map((e) => (
    <div className='Item' key={e.name}>
      <div className='card'>
        <div className='container'>
          <p>CHARACTER</p>
          <div>Name: {e.name}</div>
          <div>Eye Color: {e.eye_color}</div>
          <div>Age: {e.birth_year}</div>
          <button className='favBtn' onClick={() => remFav(e, 'people')}>
            Remove from Favorites
          </button>
        </div>
      </div>
    </div>
  ))
  const elementsPlanets = favDataPlanets.map((e) => (
    <div className='Item' key={e.name}>
      <div className='card'>
        <div className='container'>
          <p>PLANET</p>
          <div>Name: {e.name}</div>
          <div>Climate: {e.climate}</div>
          <div>Terrain: {e.terrain}</div>
          <button className='favBtn' onClick={() => remFav(e, 'planets')}>
            Remove from Favorites
          </button>
        </div>
      </div>
    </div>
  ))
  const showAll = [...elementsPlanets, ...elements]
  // let current;
  function tabSelected (cat) {
    switch (cat) {
      case 'all':
        return showAll
      case 'people':
        return elements
      case 'planets':
        return elementsPlanets
      default:
        return showAll
    }
  }
  return (
    <div className='listContainer'>
      <ul className='category'>
        <li>
          <button onClick={() => setCat('all')}>All</button>
        </li>
        |
        <li>
          <button onClick={() => setCat('people')}>People</button>
        </li>
        |
        <li>
          <button onClick={() => setCat('planets')}>Planets</button>
        </li>
      </ul>
      <div className='listItem'>{tabSelected(cat)}</div>
    </div>
  )
}

export default FavItems
