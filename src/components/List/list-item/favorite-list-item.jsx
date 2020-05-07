import React, {useLayoutEffect} from 'react'

const FavItems = () => {
    useLayoutEffect(()=>{
        console.log('hello')
       },[])
    
    return (
        <div className ="listItem">
            <div className= "Item">
                <h1>Fav Item in the list</h1>
            </div>
            
        </div>
      );
}

export default FavItems