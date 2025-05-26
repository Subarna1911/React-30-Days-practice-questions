import React from 'react'
import LikeButton from './components/LikeButton'
import ChipsInput from './components/ChipsInput'
import Accordian from './components/Accordian'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import DarkMode from './components/DarkMode'
import BlogPost from './components/BlogPost'
import Sidebar from './components/Sidebar'
import ContactForm from './components/ContactForm'

const App = () => {
  
  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript."
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React."
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js."
    },
  ];

  
  return (
  <>
  <ContactForm/>
  <Sidebar/>
  <BlogPost/>
  <DarkMode/>
  <Navbar/>
  <Routes>
   <Route path='/' element ={<Home/>}/>
   <Route path='/about' element ={<About/>}/>
  </Routes>
  <Accordian items={items}/>
  <ChipsInput/>
  <LikeButton/>

  
  </>
  )
}

export default App


