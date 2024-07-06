import ProductForm from './ProductForm'
import { useState } from 'react';

function CreateProduct(props){
    function onaddProduct(prod){
        props.onCreateProduct(prod)
    }

    let [showForm,updatedshowForm]=useState(false)

function showProduct(){
    updatedshowForm(true) 
}

function OnCancelorAddBtn(){
    updatedshowForm(false)
}

return (
        <div style={{backgroundColor:'white',padding:'10px 20px',marginBottom:'20px',marginTop:'20px'}}>
            {!showForm && <button onClick={showProduct}>Show Form</button>}
            {showForm && <ProductForm OnCancelorAddBtn={OnCancelorAddBtn} onaddProduct={onaddProduct}></ProductForm>}
    </div>
)
}
export default CreateProduct;