import { Component } from "react";

class Text extends Component{
    render(){
        return<>
        <h3>{this.props.name}</h3>
        <p>{this.props.children}</p></>
    }
}
export default Text;