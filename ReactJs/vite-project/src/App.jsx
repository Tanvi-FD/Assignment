import { useState } from 'react'
import HelloWorld from './HelloWorld/HelloWorld'
import CounterApp from './CounterApp/CounterApp'
import TodoApp from './TodoApp/TodoApp'
import MapList from './MapList/MapList'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloWorld/>

    <br/>

    <CounterApp/>

    <br/>

    <TodoApp/>

    <br/>

    <MapList/>
    </>
  )
}

export default App
