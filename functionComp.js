import React from "react";

function Demo() {
    return <h1>Function Component</h1>
}

export default function FunctionComp(props) {
    return (

        <div>
            <h1>This is :{props.name}
                <Demo />
            </h1>

        </div>
    )
}