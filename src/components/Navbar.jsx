import React from 'react'
import { NavLink } from 'react-router-dom'
import Wrapper from '../wrappers/Navbar'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">NukDrink</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
          <NavLink to="/random" className="nav-link">
            Random
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar
