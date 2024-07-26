import React, { useState } from 'react'

export default function Mouseom() {

    const [pos,setPos] = useState({x:0,y:0});

    const moveEffect = (e)=>{
        setPos({
            x:e.clientX,
            y:e.clientY 
        })
    }

    window.addEventListener('mousemove',moveEffect)
  return (
    <>  
        <div style={{
            height:80,
            width:"85px",
            borderRadius:"50px",
            border:"10px solid pink",
            outline:"10px solid yellow",
            backgroundColor:"green",
            transform:`translate(${pos.x}px,${pos.y}px)`,
            position:"absolute",
            top:-50,
            left:-50
        }}
        >

            
        </div>
    </>
  )
}

