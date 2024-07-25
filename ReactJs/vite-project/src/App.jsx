import { useState } from 'react'
import HelloWorld from './helloWorld/HelloWorld'
import CounterApp from './CounterApp/CounterApp'
import TodoApp from './TodoApp/TodoApp'
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
    </>
  )
}

export default App
