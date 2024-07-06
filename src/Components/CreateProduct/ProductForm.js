import React,{useState} from "react"

function ProductForm(props) {
let [pName, updateName]=useState('')
let [pPrice, updatePrice]=useState('')
let [pDesc, updateDesc]=useState('')
let [pAvailable, updateAvailability]=useState(false)
let [pImage, updateImage]=useState('')


    function nameInputHandler(event) {
        updateName(event.target.value)
    }
    function priceInputHandler(event) {
        updatePrice(event.target.value)
    }
    function descInputHandler(event) {
        updateDesc(event.target.value)
    }
    function AvailableInputHandler(event) {
        updateAvailability(event.target.checked)
    }
    function imageInputHandler(event) {
        updateImage(event.target.value)
    }

    function addProduct(evt){
        evt.preventDefault()
        let product={
            pName: pName, 
            desc: pDesc,
            isAvailable: Boolean(pAvailable),
            image: pImage,
            price: Number(pPrice),
            stock: Number(props.stock)
        }
        updateName('')
        updateAvailability(false)
        updateDesc('')
        updateImage('')
        updatePrice('')
        
        props.onaddProduct(product)
        props.OnCancelorAddBtn()
    }


    return (
        <form className="row g-3" onSubmit={addProduct}>
            <div className="col-md-6">
                <label htmlFor="name">Product Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label htmlFor="price">Product Price</label>
                <input type="number"
                    min="0.01" step="0.01"
                    className="form-control"
                    id="price"
                    placeholder="Product Price"
                    value={pPrice}
                    onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Product Description</label>
                <input type="text"
                    className="form-control"
                    id="description"
                    placeholder="Product Description"
                    value={pDesc}
                    onChange={descInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"
                checked={pAvailable}
                    onChange={AvailableInputHandler} />
                <label className="form-check-label" htmlFor="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label htmlFor="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                value={pImage}
                    onChange={imageInputHandler} />
            </div>

            <button type="submit" className="btn btn-primary" >Add Product</button>
            <button type="button" className="btn btn-warning" onClick={props.OnCancelorAddBtn}>Cancel</button>
        </form>
    )

}
export default ProductForm;