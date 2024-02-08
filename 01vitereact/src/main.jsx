import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element = {
  type : 'a',
  props : {
    'href' : 'https://www.google.com',
    'target' : '_blank'
  },
  'children' : 'visit google'
}

const anotherElement = (
  <a href="https://www.google.com" target="_blank">visit google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {
    href : 'https://www.google.com',
    target : '_blank'
  },
  'visit google',
  anotherElement
)

function MyApp(){
  return(<h1>hello</h1>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
