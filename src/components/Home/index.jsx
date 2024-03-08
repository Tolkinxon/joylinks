import myContext from "../context"
import { useContext } from "react"

export default function Home () {
    const { value } = useContext(myContext)

    console.log(value);

    return (
        <>
            <div>Home</div>
        </>
    )
}