import React, {useState, useEffect} from 'react'

export default function ItemList({getItem}) {

    const [item, setItem] = useState([])

    useEffect(() => {
        const takenItem = getItem(7)
        setItem(takenItem)
        console.log('render');

    }, [getItem])



  return (
    <ul>
        {item.map((i) => {
           return <li key={i}>{i}</li>
        })}
        
    </ul>
  )
}
