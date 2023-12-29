import { useState } from 'react';
import './App.css';
import CardElement from './Number';

function App(Props) {

  const[count,setCount]=useState(0);
  return (
    <div className="App">
    <CardElement   name={"  jyothi"} count={count}  setCount={setCount} />
    </div>
  );
}

export default App;