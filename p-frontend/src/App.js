import './App.css';
import { useState,useEffect } from 'react'

function App() {
  const [message, setMessage] = useState([]);
  useEffect(() =>{
    fetch('/hellow')
      .then((res) => res.json())
      .then((data) => setMessage(data.data));
  },[])
  return (
    <div className="App">
      <h1>フロントエンド</h1>
      <ul>
        {
          message.map((data) => 
            <a href={data.url}>{data.title}</a>
          )
        }
      </ul>
    </div>
  );
}

export default App;
