import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //const counter = 15

  let [counter, setCounter] = useState(15)

  const add = () => {
    if(counter <= 19)
      setCounter(counter+1)
  }

  const remove = () => {
    if(counter >= 1)
      setCounter(counter-1)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter : {counter}</h2>
    <button onClick={add}>Add</button> <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
