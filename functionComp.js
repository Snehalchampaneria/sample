import React from "react";

function Demo() {
    return <h1>Hello..Function Component</h1>
}

export default function FunctionComp(props) {
    return (

        <div>
            <h1>This is :{props.text}
                <Demo />
            </h1>

        </div>
    )
}