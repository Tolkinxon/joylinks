import { React, useState, useEffect } from 'react'
import { InputSide } from './components/inputSide'


export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [amount, setAmount] = useState(1)
  const [data, setData] = useState()
  const [currentCurrency, setCurrentCurrency] = useState('GBP')
  const [changibleCurrency, setChangibleCurrency] = useState('USD')


useEffect(() => {
const host = 'api.frankfurter.app';

async function takingData () {
   try {
    const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currentCurrency}&to=${changibleCurrency}`)
    const data = await res.json()
    setData(data.rates[`${changibleCurrency}`])
   }
   catch(error){
    console.log(error.message);
   }
   finally {
    setIsLoading(false) 
   }

    
}

takingData()
    

}, [amount, currentCurrency, changibleCurrency])
  

  // USD INR EUR CAD 
  return (
    <>
      <InputSide setAmount={setAmount} setCurrentCurrency={setCurrentCurrency} setChangibleCurrency={setChangibleCurrency} amount={amount}/>
      <div>
        {`${data}         ${changibleCurrency}`}
      </div>
    </>
  )
}
