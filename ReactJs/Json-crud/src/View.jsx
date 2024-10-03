import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const {viewId} = useParams();
    // console.log(xyz)
    useEffect(()=>{
        fetch(`http://localhost:5007/students/${viewId}`)
        .then((res)=>{return res.json()})
        .then((data)=>{
            setName(data.name)
            setEmail(data.email)
        })
      })
  return (
    <div>
      <h3>Id : {viewId} </h3>
      <h3>Name :{name}</h3>
      <h3>Email : {email} </h3>
    </div>
  );
}

export default View;
