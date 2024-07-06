import 'bootstrap/dist/css/bootstrap.min.css'
import Demo from './Components/ClassComponents/Demo'
import EffectPractice from './Components/Effect/EffectPractice'
import Reducer from './Components/UseReducer/Reducer';
import MemoPractice from './MemoPractice';
import StopWatch from './Components/Stopwatch/Stopwatch';
import Form from './Components/Form/Form';
// import './index.css'
// import Component1 from './Components/Component1/Component1';
// import Component2 from './Components/Component1/Component2';
// import PortalComponent from './Components/Component1/PortalComponent';
// import RefsDemo from './Components/Component1/RefsDemo';
// import ProductList from './Components/ProductList';
// import CreateProduct from './Components/CreateProduct/CreateProduct';
// import { useState } from 'react';
// import FilterProducts from './Components/FilterProducts/FilterProducts'

// const products = [
//         {
//             pID: 1,
//             pName: 'Fresh Milk',
//             desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//             isAvailable: true,
//             image: 'images/goku.jpg',
//             price: 12,
//             stock:6
//         },
//         {
//             pID: 2,
//             pName: 'Cottage Cheese',
//             desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//             isAvailable: false,
//             image: "images/goku.jpg",
//             price: 10,
//             stock:15
//         },
//         {
//             pID: 3,
//             pName: 'Brocoli',
//             desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//             isAvailable: true,
//             image: "images/goku.jpg",
//             price: 15,
//             stock:10
//         },
//         {
//             pID: 4,
//             pName: 'oranges',
//             desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//             isAvailable: true,
//             image: "images/goku.jpg",
//             price: 20,
//             stock:25
//         },
//         {
//             pID: 5,
//             pName: 'Olive oil',
//             desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
//             isAvailable: false,
//             image: "images/goku.jpg",
//             price: 14,
//             stock:5
//         }
// ]



function App() {
    return <>
    {/* <Form /> */}
    <StopWatch />
    {/* <Demo /> */}
{/* <Reducer /> */}
{/* <MemoPractice /> */}
{/* <EffectPractice /> */}
</>

// let[resourceType,setResourceType]=useState('HOME')

// useEffect(()=>{console.log(resourceType);},[resourceType])
// return <>

// <button onClick={()=>{setResourceType('HOME')}}>HOME</button>
// <button onClick={()=>{setResourceType('ABOUT')}}>ABOUT</button>
// <button onClick={()=>{setResourceType('CONTACT')}}>CONTACT</button>
// <h3>{resourceType}</h3>



{/* <RefsDemo />
<Component1 />
<Component2 />
<PortalComponent /> */}
// </>


    // let [newProducts, updatedProducts] = useState(products)
    // let [filterTextVal, newFilterVal] = useState('all')

    // let filterValues = newProducts.filter((products)=>{
    //     if(filterTextVal==='available'){
    //         return products.isAvailable===true
    //     }
    //     else if(filterTextVal==='unavailable'){
    //         return products.isAvailable===false
    //     }
    //     else{
    //         return products
    //     }
    // })

    // function onCreateProduct(prod) {
    //     prod.pID = newProducts.length + 1
    //     updatedProducts([prod, ...newProducts])
    // }

    // function filterValueSelected(val){
    //     newFilterVal(val)
    // }

    // return (<div className='row'>
    //     <div className='col-lg-8 mx-auto'>
    //         <CreateProduct onCreateProduct={onCreateProduct}></CreateProduct>
    //         <FilterProducts filterValueSelected={filterValueSelected}></FilterProducts>
    //         <ProductList newProducts={filterValues}></ProductList>
            
    //     </div>
    // </div>)
}

export default App;
