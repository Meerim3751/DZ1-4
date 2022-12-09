import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <ul>
        <List name = 'banana'/>
        <List name = 'apple'/>
        <List name = 'pear'/>
        <List name = 'peach'/>
      </ul>
    </div>
  )
}

function Header(){
  return ( 
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa necessitatibus asperiores eius, facere perspiciatis autem?</p> 
  )
}

function List (props) {
  return(
    <li>{props.name}</li>
  )
}

export default App
