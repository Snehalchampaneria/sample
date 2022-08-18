import React,{ Component } from "react";

function Mycomp() {

    return <h1>Hello my Component in component...</h1>
}

export default class CompInCom extends Component {
    render() {

        return(
            <React.Fragment>
            <div>
                <h1>Hello this is:</h1>
            </div>
            <Mycomp />


            </React.Fragment>
        )
    }
}