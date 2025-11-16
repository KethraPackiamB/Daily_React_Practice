import { Component2 } from "./Component2";
import { createContext, useState } from "react";
import { Component4 } from "./Component4";

export const createContent = createContext();

export const Component1 = () => {

    const [stringValue] = useState("Kethra Packiam");

    return(
        <createContent.Provider value={stringValue}>
            <h1>Component 1</h1> 
            <p>{`hello! ${stringValue}`}</p>
            <Component2 stringValue={stringValue}/>
        </createContent.Provider>
    )
}