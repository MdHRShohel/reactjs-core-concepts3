//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function LoadComments 

function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease}>Increase: </button>
      <button onClick={handleDecrease}>Decrease: </button>
    </div>
  )
}

export default App;
