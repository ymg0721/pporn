import './App.css';
import { useState,useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/hellow')
      .then((res) => res.json())
      .then((data) => setMessage(data.title));
  },[])
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <p>{ message }</p>
    </div>
  );
}

export default App;
