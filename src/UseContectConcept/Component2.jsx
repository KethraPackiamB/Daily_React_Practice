import { Component3 } from "./Component3"

export const Component2 = ({stringValue}) => {

    return(
        <div>
            <h1>Component 2</h1>
            <p>{`I am ${stringValue}`}</p>
            <Component3 stringValue={stringValue}/>
        </div>
    )
}