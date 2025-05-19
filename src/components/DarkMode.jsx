import React from 'react'
import { useState } from 'react'
import '../css/DarkMode.css'
const DarkMode = () => {
    const[isDarkMode , setIsDarkMode] = useState(false);

    const toggleTheme = ()=>{
        setIsDarkMode(!isDarkMode);
    }

  return (
     <>
     <h1 style={{textAlign:'center'}}>Day 5</h1>
     <div className={`container ${isDarkMode ?'dark-mode' : 'light-mode'}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{isDarkMode?'Dark Mode' : 'Light Mode'}</span>
      </div>
    </div>
    </>
  )
}

export default DarkMode
