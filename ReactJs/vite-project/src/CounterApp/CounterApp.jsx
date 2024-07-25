import React, { useState } from 'react';
import '../CounterApp/CounterApp.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App02">
      <h1>Counter App</h1>
      <div className="counter">
        <h2>{count}</h2>
        <div className="buttons">
          <button className="increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className="decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
