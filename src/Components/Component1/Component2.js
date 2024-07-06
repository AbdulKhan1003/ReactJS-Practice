import React, { useState } from "react";
import ShowModel from "./ShowModel";

function Component2(){
    let[showModel,updatedModel]=useState(false)
    function displayModal(){
        updatedModel(true)
    }
    function hideModal(){
        updatedModel(false)
    }
return <div style={{position:'relative'}}>
<h3>Bhai boht hi set hain bandiya hori boht hi wet hai</h3>
<p>Ola Amigo</p>
<button onClick={displayModal}>ShowModal</button>
<ShowModel showModel={showModel} hideModal={hideModal}></ShowModel>
</div>


}
export default Component2;