import React, { useState} from 'react'

const ListItem = ({data,addFav}) => {
    const [input, setInput] = useState('')
    const elements = data.filter(el => el.name.toLowerCase().match(input.toLowerCase()) || // filter by name, eye_color, and birth year
    el.eye_color.toLowerCase().match(input.toLowerCase()) ||
    el.birth_year.toLowerCase().match(input.toLowerCase())).map(e => ( //at the end map the filtered list and loop to show the elements
        <div className="card"  key={e.name}>
            <div className="container">
                <div>Name:{e.name}</div>
                <div>Eye Color: {e.eye_color}</div>
                <div>Age:{e.birth_year}</div>
                <button 
                    className="favBtn" 
                    onClick={() => addFav(e)}
                   
                    >Add To Favorites</button>
            </div>
        </div>
    ))

    return (
        <div className="listContainer">
            <div className="searchBar">
            <button className="toTop" onClick={window.scrollTo(0,0)}>To top</button>
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