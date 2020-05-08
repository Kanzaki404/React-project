import React, { useState} from 'react'

const ListItem = ({data,addFav}) => {
    const [input, setInput] = useState('')
    const elements = data.filter(el => el.name.toLowerCase().match(input)).map(e => (
        <div className="card"  key={e.name}>
            <div className="container">
                <div>Name: {e.name}</div>
                <div>Age: {e.birth_year}</div>
                <button className="favBtn" onClick={() => addToFavorite(e)}>Add To Favorites</button>
            </div>
        </div>
    ))

    function addToFavorite(element){
        //console.log(element)
        addFav(element)
    }

    return (
        <div className="listContainer">
            <div className="searchBar">
                <input value={input} onChange={e => setInput(e.target.value)}></input>
            </div>
            

            <div className ="listItem">
                <div className= "Item">
                    {elements}
                </div>
            </div>
        </div>
        
      );
}

export default ListItem