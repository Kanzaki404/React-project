import React, { useState} from 'react'

const ListItem = ({data,dataPlanets,addFav}) => {
    const [input, setInput] = useState('')
    const elements = data.filter(el => el.name.toLowerCase().match(input.toLowerCase()) || // filter by name, eye_color, and birth year
    el.eye_color.toLowerCase().match(input.toLowerCase()) ||
    el.birth_year.toLowerCase().match(input.toLowerCase())).map(e => ( //at the end map the filtered list and loop to show the elements
        <div className="card"  key={e.name}>
            <div className="container">
                <p>CHARACTER</p>
                <div>Name:{e.name}</div>
                <div>Eye Color: {e.eye_color}</div>
                <div>Age:{e.birth_year}</div>
                <button 
                    className="favBtn" 
                    onClick={() => addFav(e,"people")} // so it know from which list to delete
                   
                    >Add To Favorites</button>
            </div>
        </div>
    ))
        //im not sure how to filter when combined due to object in other list missing keys (ex eye_color: undefined) as the other ugly duplicate code
    const elementsPlanet = dataPlanets.filter(el => el.name.toLowerCase().match(input.toLowerCase()) || // filter by name, climate, and terrain
    el.climate.toLowerCase().match(input.toLowerCase()) ||
    el.terrain.toLowerCase().match(input.toLowerCase())).map(e => ( //at the end map the filtered list and loop to show the elements
        <div className="card"  key={e.name}>
            <div className="container">
                <p>PLANET</p>
                <div>Name: {e.name}</div>
                <div>Climate: {e.climate}</div>
                <div>Terrain: {e.terrain}</div>
                <button 
                    className="favBtn" 
                    onClick={() => addFav(e,"planets")}
                   
                    >Add To Favorites</button>
            </div>
        </div>
    ))
    return (
        <div className="listContainer">
            <div className="searchBar">
                <input value={input} onChange={e => setInput(e.target.value)}></input>
            </div>
            

            <div className ="listItem">
                <div className= "Item">
                    {elements}
                </div>
                <div className= "Item">        
                    {elementsPlanet}
                </div>
            </div>
        </div>
        
      );
}

export default ListItem