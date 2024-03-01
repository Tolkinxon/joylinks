import { useState } from 'react'


function InputSide ({ amount, setAmount, setCurrentCurrency, setChangibleCurrency}) {

    const [first, setFirst] = useState('GBP')
    const [second, setSecond] = useState('USD')

    const setEventFirst = (value) => {
        setFirst(value)
        setCurrentCurrency(value)  
    }

    const setEventSecond = (value) => {
        setSecond(value)
        setChangibleCurrency(value)
    }



return (
    <>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <select id="currencies1" onChange={(e) => setEventFirst(e.target.value)}>
            <option value="GBP" disabled={'GBP' == second ? true : false}>GBP</option>
            <option value="EUR" disabled={'EUR' == second ? true : false}>EUR</option>
            <option value="CAD" disabled={'CAD' == second ? true : false}>CAD</option>
            <option value="INR" disabled={'INR' == second ? true : false}>INR</option>
            <option value="USD" disabled={'USD' == second ? true : false}>USD</option>
        </select>
        <select id="currencies2" onChange={(e) => setEventSecond(e.target.value)}>
            <option value="USD" disabled={first == 'USD' ? true : false}>USD</option>
            <option value="EUR" disabled={first == 'EUR' ? true : false}>EUR</option>
            <option value="CAD" disabled={first == 'CAD' ? true : false}>CAD</option>
            <option value="INR" disabled={first == 'INR' ? true : false}>INR</option>
            <option value="GBP" disabled={first == 'GBP' ? true : false}>GBP</option>
        </select>
    </>
)
}

export { InputSide }