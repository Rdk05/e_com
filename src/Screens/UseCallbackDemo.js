import { useCallback, useState } from "react";
import CompTodo from "./Todos";

function CallbackDemo(){

    const [count , setCount] = useState(0);
    const [todos , setTodos] = useState([]);

    const incre = () => {
        setCount(count+1)
    }
    // const addTodos = () => {
    //     setTodos([...todos , "New to do"])
    // }

    const addTodos = useCallback(() => setTodos([...todos , "New to do"]), [todos])

    return(
        <div>
            <div>
            <CompTodo todos={todos} addTodos={addTodos} />
                <h1>count : {count}</h1>
                <button onClick={incre}>Increase</button>
                
            </div>
        </div>
    )
}

export default CallbackDemo;