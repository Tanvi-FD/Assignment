import React, { useState } from 'react'

export default function MapList() {

    const[list,setList] = useState([])
    const[input,setInput] = useState("")




const handelList = (index)=>{
    setList([...list,input])
    setInput("")
 
}

  return (
    <div>
        <div className='in1'>

        <input type="text" placeholder='Enter your name' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handelList}>Add</button>
        </div>
        <div className='map'>
         {
            list.map((item,index)=>{
                return <div key={index}>
                    <ul>
                        <li>{item}</li>
                    </ul>
                </div>
            })

         }
        </div>

      
    </div>
    
  )
}