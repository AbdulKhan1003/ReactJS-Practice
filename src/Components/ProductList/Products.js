import ProductDetails from "./ProductDetails";

function Products(props) {

    return (
        <li className="list-group-item" style={{backgroundColor: props.Availibility?'white':'lightgray'}}>
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex" >
                <div className="media-body" >
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.description}</p>
                    <ProductDetails price={props.price} Availibility={props.Availibility} stock={props.stock} />
                </div>
                    <div>
                        <img className="ml-lg-5" src={props.img} height="100" width="120"  alt="Nope" />
                    </div>
            </div>
        </li>
)
}

export default Products;