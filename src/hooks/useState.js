import './App.css'
import React, { useState } from 'react'

function findRandom(max) {
  console.log('Calculating...')
  return Math.trunc(Math.random() * max)
}//trunc bizga butun sonlarni qaytaradi, random esa 0 va 1 oralig'idagi sonlarni qaytaradi tasodifiy sonlar 

export default function App() {
  const [number, setNumber] = useState(() => {
    return findRandom(8) //arrow function bizga yuqoridagi functionni bir marta ishlatib berishda qo'llanilayapti 
  })
  const [state, setState] = useState({
    text: 'hello world',
    date: Date.now(),
  })

  function changingState(){ // bu usulda ishlash berilgan objectni butunlay o'zgartirmay faqat ma'lum bir qismini o'zgartirishimida qo'llniladi
    setState((prev) => {
      return {
        ...prev,
        teht: 'welcome',
        date: 'nothing'
      }
    })
  }

  const change = (son) => {
    setNumber((prev) => {
      return prev + son
    })
  }

  return (
    <div className="container">
      <h1>{number}</h1>
      <button onClick={() => change(7)}>add</button>
      <button onClick={() => change(-7)}>subtruct</button>
      <button onClick={changingState}>change the state</button>
      <pre>{JSON.stringify(state, null, 10)}</pre>
    </div>
  )
}
