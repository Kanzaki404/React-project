import React from 'react'
import ListItem from './list-item/list-item'
const list = () => {

    return (
        <div className="listComponent">
            <div className="searchBar">
                <input />
            </div>
           
            <div className="listItemContainer">
                <ListItem />
            </div>
        </div>
    );
};


export default list