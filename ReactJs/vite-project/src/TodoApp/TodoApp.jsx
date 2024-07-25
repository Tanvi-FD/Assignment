import React, { useState } from 'react'

export default function TodoList() {

  const[grocery,setGrocery] = useState([])
  const[input,setInput] = useState("")

  // const records 
  
  const handelList = (index)=>{
    // setGrocery([input])
    setGrocery([...grocery,input])
    console.log(grocery);
     setInput("")
 
  }

  const handelDel = (index) =>{
    const updatedGrocery = [...grocery];
    updatedGrocery.splice(index, 1);
    // delete updatedGrocery[index]
    console.log(updatedGrocery);
    setGrocery(updatedGrocery);
    // console.log(updatedGrocery);

  }

  const handelEdit = (index)=>{
    console.log(index);

    const EditGrocery = grocery[index]
    console.log(EditGrocery);
    setInput(EditGrocery)

  }

  const handelAllDel = ()=>{
    const AllGrocery = [...grocery];
    AllGrocery.splice(0,AllGrocery.length);
    setGrocery(AllGrocery)
    console.log(AllGrocery);
    
  }

  return (
    <div>

    <div style={{backgroundColor:"darkblue",color:"white",maxWidth:"600px",maxHeight:"600px",overflow:"scroll",scrollBehavior:"inherit" ,border:"1px solid black",margin:"0 auto",textAlign:"center",border:"15px solid green"}}>
      <h1>Blinkit Shopping Now</h1>
      <input type="text" placeholder='Enter your item' style={{fontSize:"25px"}} value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handelList} style={{fontSize:"25px"}}>{input !== null?"Add to Cart": "update"}</button><br /><br /><br />
   

      {grocery.map((item,index)=>{
        return <div key={index} style={{display:"flex",justifyContent:"space-around",alignItems:"center",width:"80%",margin:"0 auto"}}><span style={{fontSize:"25px"}}>{index+1}</span>
          <span key={index} style={{display:"inline-block",backgroundColor:"black",width:"200px",border:"1px solid black",fontSize:"25px",overflow:"hidden"}}>{item}</span>
          <button onClick={()=>handelDel(index)}><i className="fa-solid fa-trash"></i>Delete</button>
          <button onClick={()=>handelEdit(index)}><i className="fa-solid fa-pen-to-square">Edit</i></button><br/><br />
           
          
          </div>

          
      })}

      <button onClick={handelAllDel}>Delete All</button>
    
    </div>
    </div>

  )
}