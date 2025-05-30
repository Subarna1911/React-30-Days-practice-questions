import React from 'react'
import { useState } from 'react';

function Counter(){

     const [count,setCount] = useState(0);

     const handleIncrement = ()=>{
        setCount(count + 1);
     }

     const handleDecrement = ()=>{
        setCount(count - 1);
     }

     const handleReset = ()=>{
        setCount(0);
     }

    return(
        <>
        <div  style={{margin:"20px", border:"2px solid black", width:"50%", padding:"20px"}}>
            <h1>React Counter App</h1>
            <h2>Count:{count}</h2>
            <div style={{display:"flex", gap:"2rem", alignItems:"center"}}>
            <button style={{padding:"10px", background:"green", color:"white", border:"none", cursor:"pointer"}} onClick={handleIncrement}>Increment</button>
            <button style={{padding:"10px", background:"red", color:"white", border:"none", cursor:"pointer"}} onClick={handleDecrement}>Decrement</button>
            <button style={{padding:"10px", background:"blue", color:"white", border:"none", cursor:"pointer"}}  onClick={handleReset}>Reset</button>
            </div>
        </div>

        </>
    )
}

export default Counter;
