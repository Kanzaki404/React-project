import React from 'react'

const FavItems = ({favData,favDataPlanets, remFav}) => {
    
    const elements = favData.map(e => (
        <div className="card"  key={e.name}>
            <div className="container">
                <div>Name: {e.name}</div>
                <div>Eye Color: {e.eye_color}</div>
                <div>Age: {e.birth_year}</div>
                <button className="favBtn" onClick={()=> remFav(e, "people")}>Remove from Favorites</button>
            </div>
        </div>
    ))

    const elementsPlanets = favDataPlanets.map(e => (
        <div className="card"  key={e.name}>
            <div className="container">
                <div>Name: {e.name}</div>
                <div>Climate: {e.climate}</div>
                <div>Terrain: {e.terrain}</div>
                <button className="favBtn" onClick={()=> remFav(e, "planets")}>Remove from Favorites</button>
            </div>
        </div>
    ))
    
    return (
        <div className="listContainer">        
            <div className ="listItem">
                <div className= "Item">
                    {elements}
                </div>
                <div className= "Item">
                    {elementsPlanets}
                </div>
            </div>
        </div>
        
      );
}

export default FavItems