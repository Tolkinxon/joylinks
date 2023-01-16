import './App.css'
import React, { useState, useEffect, useMemo } from 'react'

function countSlow(num) {
  console.log('countSlow function is working')
  let i = 0
  while (i < 200000000) i++
  return num * 2
}

export default function App() {
  const [number, setNumber] = useState(8)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => {    
    return { 
      color: colored ? 'crimson' : 'black'
    }
},[colored])

  

  const slowNumber = useMemo(() => { 
    return countSlow(number)
  },[number]) 

  useEffect(() => {
    console.log('styles was changed');
    console.log(styles);
  }, [styles])

  return (
    <div className="container">
      <p style={styles}>the number: {slowNumber}</p>

      <button onClick={() => setNumber(slowNumber)}>add</button>
      <button onClick={() => setNumber(slowNumber / 4)}>substruct</button>
      <button onClick={() => setColored(!colored)}>Edit</button>
    </div>
  )
}
