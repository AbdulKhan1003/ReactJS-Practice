import Products from "./Products";


function ProductList(props){
    return  props.newProducts.length===0 ? <h3>No Available Products</h3> :    
    (     

    <ul className="list-group shadow">
                    {
                        props.newProducts.map((productsObject)=>{
                            return (
                                
                            <Products key={productsObject.pID} id={productsObject.pID} name={productsObject.pName} description={productsObject.desc} 
                            Availibility={productsObject.isAvailable} img={productsObject.image} price={productsObject.price} stock={productsObject.stock}>      
                            </Products>
                            )
                        })
                    }
            </ul>
    )
}

export default ProductList;