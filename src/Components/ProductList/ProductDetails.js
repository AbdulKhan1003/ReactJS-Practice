import React, {useState} from "react";
import Button from "./Button";

function ProductDetails(props){
    let [prodQuantity,updateCount]= useState(0)    
    function decrementCount(){
        prodQuantity <0?prodQuantity=0:prodQuantity=prodQuantity
        updateCount(--prodQuantity)
    }
    function incrementCount(){
        prodQuantity <0?prodQuantity=0:prodQuantity=prodQuantity
        updateCount(++prodQuantity)
        }

        let badge="badge ms-5 bg-"
    badge+= props.Availibility?'success': 'danger'
return(                    
<div className="d-flex align-items-center justify-content-start mt-1">
    <h6 id="prodPrice" className="font-weight-bold my-2" style={{paddingRight:'20px'}}>${prodQuantity <=0?props.price : props.price * prodQuantity}</h6>
    <Button eventHandler={decrementCount} disabled={prodQuantity===0} >-</Button>
    <span style={{ marginRight:'10px',marginLeft:'10px'}}>{prodQuantity}</span>
    <Button eventHandler={incrementCount} disabled={prodQuantity===props.stock}>+</Button>
    <span className={badge}>{props.Availibility ? 'Available' : 'Unavailable'}</span>
</div>)
}

export default ProductDetails;