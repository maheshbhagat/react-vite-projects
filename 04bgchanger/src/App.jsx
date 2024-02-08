import {useState} from 'react'

function App() {

  let [color, setColor] = useState('green');

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{background: color}}
      >
         
         <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <button
              type="button"
              style={{background: "green"}}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white w-40"
              onClick={() => setColor('green')}
          >
              green
          </button>
          <button
              type="button"
              style={{background: "yellow"}}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white w-40"
              onClick={() => setColor('yellow')}
          >
              yellow
          </button>
          <button
              type="button"
              style={{background: "pink"}}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white w-40"
              onClick={() => setColor('pink')}
          >
              pink
          </button>
          <button
              type="button"
              style={{background: "red"}}
              className="rounded-md px-3 py-2 text-sm font-semibold text-white w-40"
              onClick={() => setColor('red')}
          >
              Red
          </button>
         </div>
         
      </div>
    </>
  )
}

export default App
