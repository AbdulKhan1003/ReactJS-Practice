import { useState,useCallback } from "react";
import Button from "./Components/ProductList/Button";
import Span from "./Span";

function MemoPractice(){
    let [count,updateCount]=useState(0)
    let increment= useCallback(function(){
        updateCount(count+1)
    },[])

    let decrement= useCallback(function(){
        updateCount(count-1)
    },[])
return <>
{console.log("Main Executed")}
<Button eventHandler={decrement}>-</Button>
<Span count={count}  />
<Button eventHandler={increment}>+</Button>
</>
}
export default MemoPractice;