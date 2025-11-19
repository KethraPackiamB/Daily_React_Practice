import { createContext, useState } from "react";
import { DisplayCount } from "./DisplayCount";
import { IncrementButton } from "./IncrementButton";
 

export const CountContext = createContext();

export const ContextComponent = () => {

   const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return(
        <CountContext.Provider value={{count,increment}}>
            <center>
            <h1>Simple Counter</h1>
            <DisplayCount/>
            <IncrementButton/>
            </center>
        </CountContext.Provider>
    )

}