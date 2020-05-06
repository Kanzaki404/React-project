import React from 'react'
import ListItem from './list-item/list-item'
import FavItem from './list-item/favorite-list-item'
const List = ({tabSelected}) => {

    return (
        <div className="listComponent">
            <div className="searchBar">
                <input />
            </div>
           
            <div className="listItemContainer">
                {tabSelected === 'search' ? <ListItem />:  <FavItem/>}
                
              
            </div>
        </div>
    );
};


export default List