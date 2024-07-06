import { useRef } from "react";

function RefsDemo(){
    let RefValue = useRef()
    function RefMethod(){
        console.log(RefValue.current.value)
    }
return <>
<label htmlFor="name">Name:</label>
<input type="text" name="name" id="name" ref={RefValue} />
<button onClick={RefMethod}>Submit</button>
</>
}
export default RefsDemo;