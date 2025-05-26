import React from 'react'
import '../css/Sidebar.css'
import { Menu } from 'lucide-react';
import {useState} from 'react'

const Sidebar = () => {

    const[isOpen,setIsOpen] = useState(false);


    function toggleSidebar(){
        setIsOpen(!isOpen);
    }

  return (
   <>


   <div className={`sidebar ${isOpen ? "open" : "closed"}`}  data-testid="sidebar">
    <button onClick={toggleSidebar} className="toggle-btn"><Menu/></button>

    {isOpen &&(
     <nav className="nav-menu">
        <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
        </ul>
     </nav>
    )}
   </div>
   </>
  )
}

export default Sidebar
