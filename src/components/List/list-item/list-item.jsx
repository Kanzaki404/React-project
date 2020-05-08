import React from 'react'

const ListItem = ({data}) => {
    const elements = data.map(e => (
        <div className="card"  key={e.name}>
            <div className="container">
                <div>Name: {e.name}</div>
                <div>Age: {e.birth_year}</div>
            </div>
        </div>
        
    ))
//    useEffect(()=>{
       
//    },[data])

    return (
        <div className ="listItem">
            <div className= "Item">
                {elements}
            </div>
        </div>
      );
}

export default ListItem