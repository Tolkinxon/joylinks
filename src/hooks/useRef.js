import './App.css'
import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  // const [renderCount, setRenderCount] = useState(1)

  const [value, setValue] = useState('default')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current += 1
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div className="container">
      <p>showing of renders: {renderCount.current}</p>
      <p>it is the prev value: {prevValue.current}</p>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>clic me</button>
    </div>
  )
}
