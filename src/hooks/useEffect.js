import './App.css'
import React, { useState, useEffect } from 'react'

export default function App() {
  const [user, setUser] = useState('users')
  const [data, setData] = useState([])
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    console.log('render')

    fetch(`https://jsonplaceholder.typicode.com/${user}`)
      .then((response) => response.json())
      .then((json) => setData(json))

      return () => {
        console.log('hello');
      }
  }, [user])



  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    })
  },[])
  return (
    <div className="container">
      <h1>Users: {user}</h1>

      <div>
         <button onClick={() => {setUser('users')}}> Web developer</button>
          <button onClick={() => {setUser('posts')}}> Android developer</button>
          <button onClick={() => {setUser('todos')}}> Ios developer </button>
      </div>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  )
}
