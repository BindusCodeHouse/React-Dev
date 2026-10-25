import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    if(counter >= 0) {
      setCount(counter);
    }
    
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter >= 0) {
      setCount(counter);
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Number is: {counter}</h3>
      <br/>
      <button onClick={addValue}>++</button>
      <br />
      <button onClick={removeValue}>--</button>
    </>
  )
}

export default App
