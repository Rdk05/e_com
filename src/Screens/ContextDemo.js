import { createContext, useContext, useState } from "react"

const CountContext = createContext()

const A = () => {
    const [count , setCount] = useState(40)
    return(
        <>
        <CountContext.Provider value={count} >
          <h1>This is page A</h1>
          <B count={count}/>
        </CountContext.Provider>
        </>
    )
}

const B = () => {
    return(
        <>
        <h1>This is page B</h1>
        <C/>
      </>
    )
}

const C = () => {
    const count = useContext(CountContext)
    return(
        <>
        <h1>This is page C: {count}</h1>
        <D/>
      </>
    )
}

const D = () => {
    return(
        <>
        <h1>This is page D</h1>
        <E/>
      </>
    )
}

const E = () => {
    const count = useContext(CountContext)
    return(
        <>
         <h1>This is page E</h1>
         <h1>Value of Count is {count}</h1>
        </>
        
    )
}

export default A