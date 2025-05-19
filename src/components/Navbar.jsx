import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <>
    <h1 className='day4'>DAY 4</h1>
    <div className="navbar">
        <div className="logo">
         CoCo
        </div>
        <ul className="navbar-list">
             <li><NavLink to='/'>Home</NavLink></li>
             <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
