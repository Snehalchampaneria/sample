import React, {  Component } from 'react'

export default class PropsComp extends Component {
    constructor(props){
        super();
    }

render(){
    return(
        <div> 
            <h1>Hello {this.props.name}</h1>
        </div>
    )
}

}


