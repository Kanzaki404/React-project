import React, { useState } from 'react'

const ListItem = ({ data, dataPlanets, addFav }) => {
  const [input, setInput] = useState('')
  const elements = data
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) || 
        el.eye_color.toLowerCase().match(input.toLowerCase()) ||
        el.birth_year.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => ( 
      <div className='card' key={e.name}>
        <div className='container'>
          <p>CHARACTER</p>
          <div>Name:{e.name}</div>
          <div>Eye Color: {e.eye_color}</div>
          <div>Age:{e.birth_year}</div>
          <button
            className='favBtn'
            onClick={() => addFav(e, 'people')} 
          >
            Add To Favorites
          </button>
        </div>
      </div>
    ))
  
  const elementsPlanet = dataPlanets
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) || 
        el.climate.toLowerCase().match(input.toLowerCase()) ||
        el.terrain.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => ( 
      <div className='card' key={e.name}>
        <div className='container'>
          <p>PLANET</p>
          <div>Name: {e.name}</div>
          <div>Climate: {e.climate}</div>
          <div>Terrain: {e.terrain}</div>
          <button className='favBtn' onClick={() => addFav(e, 'planets')}>
            Add To Favorites
          </button>
        </div>
      </div>
    ))
  return (
    <div className='listContainer'>
      <div className='searchBar'>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      <div className='listItem'>
        <div className='Item'>{elements}</div>
        <div className='Item'>{elementsPlanet}</div>
      </div>
    </div>
  )
}

export default ListItem
