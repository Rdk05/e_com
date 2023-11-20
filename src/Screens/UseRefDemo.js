import {useEffect, useRef , useState } from "react"



const UseRefDemo = () => {

    const [ value , setValue ] = useState("")
    const inputE1 = useRef()

    useEffect(() => {
        inputE1.current = value
    },[value])

    const handleFocus = () => {

        if(! value)
        {
            inputE1.current.style.border = '2px solid red'
        }
        else
        {
            inputE1.current.style.border = '2px solid green' 
        }
    }

    return(
        <>
        <input placeholder="Enter any value" ref={inputE1} value={value} onChange={(e) => setValue(e.target.value)} />
        <br/>
        <br/>
        <button onClick={handleFocus}>Click Me</button>
        
        <h1>Current Value : {value}</h1>
        <h1>Previous Value : {inputE1.current}</h1>

        </>
    )
}

export default UseRefDemo