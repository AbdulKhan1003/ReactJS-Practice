import { useReducer } from "react";

function reducer(currentState,action){
    if(action==='increment'){
        console.log("INC")
        return {count: currentState.count + 1}
    }
    else if(action==='decrement'){
        console.log("DEC")
        return {count: currentState.count - 1}
    }
    else{
        return currentState.count
    }
}

function Reducer(){
    let [state, updatedState] = useReducer(reducer, {count:0} )

    function decrement(){
        updatedState('decrement')
    }
    function increment(){
        updatedState('increment')
    }

    return <>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
    </>
}
export default Reducer;