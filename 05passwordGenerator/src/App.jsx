import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null)

  let [password, setPassword] = useState("")

  const PasswordGenerator = useCallback(() => {
    
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    if(numAllowed) str += '1234567890'
    if(charAllowed) str += '{}[]:;<>?|'
    
    const strLength = str.length
    let pass = ''

    for (let index = 1; index <= length; index++) {
      pass += str.charAt(Math.floor(Math.random() * strLength + 1))
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numAllowed, charAllowed, PasswordGenerator])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);

    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>

        <div>
          <input className='rounded-sm p-1 w-80 mt-4' type='text' value={password} placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={copyToClipboard} className='text-white outline-none bg-blue-700 px-3 py-0.5 shrink-0 mt-4 rounded-sm'>Copy</button>
        </div>

        <div>
          <input type='range' min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} /> <span className='text-white mr-2'>Length: {length}</span>
          <input type='checkbox' id='numberInput' defaultChecked={numAllowed} onChange={() => {setNumAllowed((prev)=>!prev)}} /> <span className='text-white mr-2'>Numbers</span>
          <input type='checkbox' id='charInput' defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev)=>!prev)}} /> <span className='text-white mr-2'>Character</span>
        </div>
      </div>
    </>
  )
}

export default App
