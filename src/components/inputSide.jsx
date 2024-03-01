function InputSide ({ amount, setAmount, setCurrentCurrency, setChangibleCurrency}) {




return (
    <>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <select id="currencies1" onChange={(e) => setCurrentCurrency(e.target.value)}>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
        </select>
        <select id="currencies2" onChange={(e) => setChangibleCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
        </select>
    </>
)
}

export { InputSide }