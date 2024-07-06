let FilterProducts=(props)=>{
    function onValueChanged(evt){
        props.filterValueSelected(evt.target.value)
    }
     return(<div className="filter-area">
        <select name="isAvailable" onChange={onValueChanged}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
     </div>
     )
}
export default FilterProducts;