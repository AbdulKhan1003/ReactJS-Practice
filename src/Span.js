import React from "react";
function Span(props){
    
    return<> <span>{props.count}</span>
        {console.log("Span Executed")}
</>
}
export default Span;