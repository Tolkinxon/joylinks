import React, { useContext } from 'react'
import { AlerContext } from '../../App'

export default function Alert() {
  const alart = useContext(AlerContext)
  console.log(alart)
  if (!alart) return null
  return (
    <div style={{ background: 'yellow', padding: '0px' }}>
      <h5>These messages are very imortant</h5>
    </div>
  )
}
