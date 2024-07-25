import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HelloWorld from './helloWorld/HelloWorld.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <HelloWorld/> */}
    <App />
  </React.StrictMode>,
)
