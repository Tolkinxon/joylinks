import './App.css'
import React, { useState } from 'react'
import Main from './hooks/useContext/Main'
import Alert from './hooks/useContext/Alert'

export const AlerContext = React.createContext()

export default function App() {
  const [alert, setAlert] = useState(false)
  const toggleAlert = () => setAlert((prev) => !prev)
  return (
    <AlerContext.Provider value={alert}>
      <div className="container">
        <Alert />
        <Main toggle={toggleAlert} />
      </div>
    </AlerContext.Provider>
  )
}
