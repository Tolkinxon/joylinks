import { React, useState, useEffect } from 'react'



export default function App() {

  useEffect(() => {
    const host = 'api.frankfurter.app';
    
  fetch(`https://${host}/latest?amount=10&from=INR&to=USD`)
    .then(resp => resp.json())
    .then((data) => {
      alert(`10 EUR = ${data.rates.USD} USD`);
    });
  })


  return (
    <>
    
    </>
  )
}
