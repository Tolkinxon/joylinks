import './App.css'
import React, { useState, useEffect, useLayoutEffect } from 'react'

export default function App() {
  const [value, setValue] = useState(0)

  // useEffect(() => {
  //   if(value === 0)
  //   setValue(10 * Math.random())

  // }, [value])
  
  
  useLayoutEffect(() => {
    if(value === 0)
    setValue(10 * Math.random())

  }, [value])

  console.log('render ', value);

  return (
    <div className="container">
      <button onClick={() => {setValue(0)}}>{value}</button>
    </div>
  )
}
