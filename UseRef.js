import React, { useRef } from "react";

export default function UseRef() {

    const InputDOM = useRef()
    const handleSubmit = () => {
        InputDOM.current.style.backgroundColor = "blue";
        InputDOM.current.style.color = "white";
        InputDOM.current.className = 'fname';
        InputDOM.current.id = 'fname';


    }


    return (

        <div>
            <h1>Hello....</h1>
            <input id="d1" type="text" ref={InputDOM} />
            <button onClick={handleSubmit}>click</button>

        </div>
    )



}
