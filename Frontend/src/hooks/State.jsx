import React, { useState } from 'react'

const State = () => {
    //const [value,setvalue]=useState(initialvalue);
    const [count,setCount]=useState(0);
    const handleDecrement=()=>{
        setCount(-1);
    }
    const handleReset=()=>{
        setCount(0);
    }
    const handleIncrement=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default State