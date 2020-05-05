import React from 'react'
import logo from '../../logo.svg';

const Navbar = () => {
    
    return (
      <nav className="nav-bar-style">
        <img src={logo} alt="logo" /> 
        <ul>
            <li> <button> Search</button> </li>
            <li> <button> Favorites</button> </li>
        </ul>
      </nav>
    );
  };
  

  export default Navbar;