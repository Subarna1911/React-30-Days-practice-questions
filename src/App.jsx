import React from 'react'
import LikeButton from './components/LikeButton'
import ChipsInput from './components/ChipsInput'
import Accordian from './components/Accordian'

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
  <Accordian items={items}/>
  <ChipsInput/>
  <LikeButton/>
  
  </>
  )
}

export default App


