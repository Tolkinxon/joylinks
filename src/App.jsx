import Home from "./components/Home"
import myContext from './components/context'


export default function App () {
  return(
    <>
      <myContext.Pgit rovider value={{item: 'hello'}}>
          <div>hello world</div>
       
      </myContext.Provider>
    </>
  )
}