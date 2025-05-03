import React from 'react'
import { useState } from 'react'

const ChipsInput = () => {

    const[value,setValue] = useState("");
    const[chips,setcChips] = useState([]);

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

const handleRemove=(indexValue)=>{
    setcChips(chips.filter((_,index)=>index !== indexValue));
}

  return (
    <>
     <h1 style={{textAlign:'center'}}>Day2</h1>
    <div style={{marginTop:'20px',justifyContent:'center', display:'flex' }} >
       
        <input style={{padding:'20px',width:'250px' }} onChange={handleChange} onKeyDown={(e)=>{if(e.key==='Enter'){
            e.preventDefault();
            if(value.trim()){
                setcChips([...chips,value.trim()]);
                setValue('');
            }
        }
        }}  value={value} placeholder="enter your text" type="text" />
       <div>

       <ul>
        {chips.map((chip,index)=>( <li key={index}>
            {chip}

            <button onClick={()=>handleRemove(index)} >X</button>
        </li>))}
        
       </ul>
      
      
       </div>
       
      
    </div>
    </>
  )
}

export default ChipsInput
