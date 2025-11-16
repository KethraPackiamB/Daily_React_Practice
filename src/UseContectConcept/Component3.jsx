import { Component4 } from "./Component4"

export const Component3 = ({stringValue}) => {

    return(
        <div>
            <h1>Component 3</h1>
            <p>{`This is ${stringValue}`}</p>
            <Component4 stringValue={stringValue}/>
        </div>
    )
}