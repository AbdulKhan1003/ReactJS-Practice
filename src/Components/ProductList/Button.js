import React from "react";
function Button(props){
    return(<> {console.log("Button Executed")}
    <button onClick={props.eventHandler} disabled={props.disabled}  className="btn btn-primary">{props.children}</button></>)
}
export default React.memo(Button);