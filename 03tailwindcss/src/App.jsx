import { useState } from 'react'
import Card from './Card'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-5'>TailWind CSS</h1>
      <Card username="mahesh" btnText="click me" />
      <Card username="bhagat" />
    </>
  )
}

export default App
