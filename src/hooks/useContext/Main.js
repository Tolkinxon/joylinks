import React from 'react'

export default function Main({toggle}) {
  return (
    <>
        <p>
            hello from Context
        </p>

        <button onClick={toggle}>Show Alert</button>
    </>
  )
}
