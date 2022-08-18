import { useState, useEffect } from "react";

export default function UseEffect() {

    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    useEffect( () => {
        console.log('render...')
        for(var i=0;i<100000000000;i++){}
    },[count1])

    return(
        <div>
            <h1>count1 :{count1}</h1>
            <h1>count2 :{count2}</h1>
            <button onClick={ () => setCount1(count1+1)}>click</button>&nbsp;
            <button onClick={ () => setCount2(count2+1)}>click</button>&nbsp;
        </div>
    )
}