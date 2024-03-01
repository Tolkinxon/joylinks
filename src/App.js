import { React, useState, useEffect } from 'react'
import { InputSide } from './components/inputSide'


export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [problemShowing, setProplemShowing] = useState(false)
  const [amount, setAmount] = useState(1)
  const [data, setData] = useState()
  const [currentCurrency, setCurrentCurrency] = useState('GBP')
  const [changibleCurrency, setChangibleCurrency] = useState('USD')


useEffect(() => {
const host = 'api.frankfurter.app';

async function takingData () {
   try {
    const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currentCurrency}&to=${changibleCurrency}`)
    if(res.ok){
      const data = await res.json()
      console.log(data);
      setData(data.rates[`${changibleCurrency}`])
    } 
    else {
      throw new Error("Something went wrong....") 
    }

   }
   catch(error){
    console.log(error);
    setProplemShowing(error.message)
   }
   finally {
    setIsLoading(false) 
   }

    
}

takingData()
    

}, [amount, currentCurrency, changibleCurrency])
  

  // USD INR EUR CAD 
  return (
    <div>
      <h1>Converting currency</h1>
      { isLoading ? "Data is loading...": problemShowing ? 'Something went wrong please check and try again...' :     
        <>
            <InputSide setAmount={setAmount} setCurrentCurrency={setCurrentCurrency} setChangibleCurrency={setChangibleCurrency} amount={amount}/>
            <div>
              {`${data} ${changibleCurrency}`}
            </div>    
        </>


        }
    </div>
  )
}
