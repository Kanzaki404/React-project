import React from 'react'
import logo from '../../logo.svg';

const Navbar = ({tabCallback}) => {
    
    return (//update state in app depending which tab/button pressed
      <nav className="nav-bar-style">
        <img onClick={ () => tabCallback('Search')} src={logo} alt="logo" /> 
        <ul>
            <li> <button onClick={ () => tabCallback('Search')}> Search</button> </li> 
            <li> <button onClick={ () => tabCallback('Favorite')}> Favorites</button> </li>
        </ul>
      </nav>
    );
  };
  

  export default Navbar;