import { React, useState, useEffect } from 'react'
import { InputSide } from './components/inputSide'


export default function App() {
  const [amount, setAmount] = useState(10)
  const [data, setData] = useState()
  const [currentCurrency, setCurrentCurrency] = useState('GBP')
  const [changibleCurrency, setChangibleCurrency] = useState('USD')


  useEffect(() => {
    const host = 'api.frankfurter.app';
    
  fetch(`https://${host}/latest?amount=${amount}&from=${currentCurrency}&to=${changibleCurrency}`)
    .then(resp => resp.json())
    .then((data) => {
      console.log(data);
      setData(data.rates[`${changibleCurrency}`])
    });

    console.log(amount, currentCurrency, changibleCurrency);
  }, [amount, currentCurrency, changibleCurrency])
  

  // USD INR EUR CAD 
  return (
    <>
      <InputSide setAmount={setAmount} setCurrentCurrency={setCurrentCurrency} setChangibleCurrency={setChangibleCurrency} amount={amount}/>
      <div>
        {data}
      </div>
    </>
  )
}
