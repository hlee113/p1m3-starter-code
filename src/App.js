import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Example from "./Example";

function App() {
  const [data, setData] = useState([{}])
  const [initial,set] = useState([{}])
  useEffect(()=>{
    fetch("/").then(
      response => response.json()
    ).then(data => console.log(data))
  },[]);
  useEffect(() =>{
    fetch("members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {(typeof data.members === 'undefined') ? (
          <p>Loading...</p>
        )  :(
          data.member.map((member,i) => (
            <p key={i}>{member}</p>
          ))
        )}
        <Example/>
        <button onClick ={() => data}>Sorry</button>
      </header>
    </div>
  );
}

export default App;
