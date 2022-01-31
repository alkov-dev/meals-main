import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header className='header'>
      <div className="container">
        <p>Meal DB</p>
        <div className='header-list'>
          <NavLink className='header-link' to="/search">Search</NavLink>
          <NavLink className='header-link' to="/">Home</NavLink>
        </div>
      </div>
    </header>
  )
}


export default Header;