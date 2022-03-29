import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1> {count}</h1>
       <button className="up" onClick={() =>{
            setCount(count+1) 
       }}>increment </button>
       <button className="down" onClick={() =>{ setCount(count-1)  }}>decrement </button>
       <button className="zero" onClick ={()=>{setCount(0)}}  > Set to zero</button>

       
      </header>
    </div>
  );
}

export default App;
