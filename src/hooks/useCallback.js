import './App.css'
import React, {useState, useCallback}from 'react'
import ItemList from './ItemLIst'



export default function App() {

  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(0)

  const styles = {
    color: colored ? 'brown' : 'grey'
  }

  const generateItem = useCallback((extraNumber) => {
    return new Array(count).fill('').map((_, index) => `Element${index + extraNumber}`)
  }, [count])


return (
    <div className="container">
      <h1 style={styles}>Amount of count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>add count</button>
      <button onClick={() => setColored(prev => !prev)}>edit color</button>
      <ItemList getItem={generateItem} />
    </div>
  )
}
