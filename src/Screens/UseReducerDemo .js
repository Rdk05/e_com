import { useReducer } from "react";

function UseReducerDemo(){

    const initialState = {
        counter : 0
    }

    function reducer(state, action){
        let newState;
        switch(action.type){

            case "Incre":
                newState = {counter : state.counter + action.step }
                break

            case "Decre":
                newState = {counter : state.counter - action.step}
                break

            default:
                throw new Error();

        }
        return newState;
    }

    const [state , dispatch] = useReducer(reducer, initialState);

    const action1 = {
        type : "Incre",
        step : 10
    }
    const action2 = {
        type : "Decre",
        step : 5
    }

    return(
        <>
            <h1>Counter : {state.counter}</h1>
            <button onClick={()=> dispatch(action1)}>Incre</button>
            <button onClick={()=> dispatch(action2)}>Decre</button>
        </>
    )
}

export default UseReducerDemo