import { createContext, useState } from "react";
import { Component4 } from "./Component4";
import { Component3 } from "./Component3";
import { Component2 } from "./Component2";

export const MyContext = createContext();

export const Component1 = () => {

    const [string, setString] = useState("Hello World");

    const [user] = useState({
        name:"Kethra Packiam",
        age : "21"
    })

   

    const handleChange = () => {
        setString("Hello Universe!");
    }

    return(
        <MyContext.Provider value={{
            string: string,
            user: user,
        }}>
            <h1>Component 1</h1>
            <h2>{string}</h2>
            <button onClick={handleChange}>change</button>
            <Component4 />
            <Component3 />
            <Component2 />
        </MyContext.Provider>
    )
}