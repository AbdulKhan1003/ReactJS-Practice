import React from "react";
import ReactDOM from "react-dom";
import './Modal.css'

function ShowModel(props){
return ReactDOM.createPortal(
<>
<div className={`alert position-absolute alert-secondary d-${props.showModel ? '' : 'none'}`}>
        <h2>This is an Alert!</h2>
        <p>
           This is a very simple example of how a custom
           alert window can be created and displayed 
           dynamically using JavaScript.
        </p>
        <button className= "modal-btn" onClick={props.hideModal}>OK</button>
</div>
<div className={`overlay d-${props.showModel ? '' : 'none'}`}></div>
</>,document.getElementById('root-portal')
)}
export default ShowModel;