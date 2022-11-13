import React, { Component } from "react";

class LifeCycle extends Component{

constructor() 
    { 
        super(); 
        this.state = { hello : "World!" }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState=() =>
    { 
        this.setState({ hello : "Geek!" }); 
    } 
  
    render() 
    { 
        return ( 
            <div> 
            <h1>GeeksForGeeks.org, Hello....</h1>
            <h1 style={{color:"blue"}}>{ this.state.hello }</h1>
            <h2> 
            <button onClick={this.changeState}>Press Here!</button> 
            </h2> 
            </div>); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
} 

export default LifeCycle;

  