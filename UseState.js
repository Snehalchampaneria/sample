import React, { useState } from "react";


export default function UseState() {
    const [count, setCount] = useState(0)
    const [state, setState] = useState("Null")
    const handleState = () => {
        setState("State Changed")
    }

    const reset=()=>{
         setCount(0)
         setState("Null")
    }

    return (

        <center>
        <div >

            <h1>State:{state}</h1>
            <h1>count:{count}</h1>
            <button onClick={(e) => setCount(count + 1)}>Increment</button>&nbsp;
            <button onClick={(e) => setCount(count - 1)}>Decrement</button>&nbsp;
            <button onClick={() => handleState()}>Update</button>&nbsp;
            <button onClick={()=>reset()}>Reset</button>


        </div>
        </center>


    )

}