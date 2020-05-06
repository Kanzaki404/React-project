import React from 'react'
import logo from '../../logo.svg';

const Navbar = ({tabCallback}) => {
    
    return (
      <nav className="nav-bar-style">
        <img src={logo} alt="logo" /> 
        <ul>
            <li> <button onClick={ () => tabCallback('search')}> Search</button> </li>
            <li> <button onClick={ () => tabCallback('favorite')}> Favorites</button> </li>
        </ul>
      </nav>
    );
  };
  

  export default Navbar;