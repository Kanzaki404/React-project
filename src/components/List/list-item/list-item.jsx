import React from 'react'

const ListItem = ({data}) => {
    const elements = data.map(e => (
        <div key={e.name}>
            <div>{e.name}</div>
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