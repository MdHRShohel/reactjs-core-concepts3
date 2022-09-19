//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] =useState([]);
  useEffect(()=>{ 
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))
},[])

  return(
    <div>
      <h3>Load Comments</h3>
      <h3>{comments.length}</h3>
      {
        comments.map(comment => <Comment comment={comment}></Comment>)
      }
    </div>
  )
}

function Comment(props){
  return(
    <div>
      <h3>Name: {props.comment.name}</h3>
      <p>Email: {props.comment.email}</p>
      <p>Commet: {props.comment.body}</p>
    </div>
  )
}

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
