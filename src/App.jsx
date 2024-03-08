import Home from "./components/Home"
import myContext from './components/context'


export default function App () {
  return(
    <>
      <myContext.Provider>
          <div>hello world</div>
          <Home />
      </myContext.Provider>
    </>
  )
}