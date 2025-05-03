import React from 'react'
import { useState } from 'react'

const LikeButton = () => {

    const[isClicked,setIsClicked] =useState(false);

    const[isHovered,setIsHovered] =useState(false);

    const handleClick =()=>{
        setIsClicked(prevState=>!prevState)
    }

    const buttonStyle={
        border:isHovered ? '2px solid red':isClicked?'2px solid red':'2px solid gray',
        color: isClicked ? 'white':isHovered ? 'red':'gray',
        backgroundColor:isClicked ? 'red':'white',
        borderRadius:'20px',
        padding:'8px 12px',
        cursor:'pointer',
        transition:'all 0.2s  ease'
    }

    const heartStyle={
        color:isClicked ? 'white':isHovered ? 'red' :'gray'
    }

  return (
   <>
   <h1 style={{textAlign:'center'}}>Day 1</h1>
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50"}}>
    <button style={buttonStyle} onClick={handleClick}
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=>  setIsHovered(false)}
    
    > <span style={heartStyle}>{isClicked? '🤍' : '❤'}</span>Like</button>
   </div>
   </>
  )
}

export default LikeButton
