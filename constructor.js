import React, { Component } from 'react'

export default class ConstructComp extends Component {
    constructor() {
        super()
        this.state = {
            number: "sam"
        }
    }

    render() {

        return (

            <div>

            <h1> This is Constructor component...</h1>
            <h1> {this.state.number}</h1>

            
            </div>

        )
}
}