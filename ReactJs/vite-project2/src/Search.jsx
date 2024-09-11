import React from 'react'
import { useState, useEffect } from "react"
import './Search.css'


export default function Search() {

  const [arry, setArry] = useState([])
  const [search, setSearch] = useState("")


  const fetchApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data);
    setArry(data)

  }

  useEffect(() => {
    try {
      fetchApi()
    } catch (error) {
      console.log("Errror");


    }


  }, [])

  return (
    <div className='text-white text-center'>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter name" />


      <table border={1}>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>City</th>
            <th>Action</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>

          {arry.filter((item) => { return search.toLowerCase() === "" ? item : item.name.toLowerCase()
          .startsWith(search) }).map((item, index) => {
            return <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.city}</td>
              <td><button className="btn btn-success">Edit</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
             
            </tr>

          })}
        </tbody>
      </table>

    </div>
  )
}


