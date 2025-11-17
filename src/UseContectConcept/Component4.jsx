import { MyContext } from "./Component1";
import { useContext } from "react";

export const Component4 = () => {

    const contextvalue = useContext(MyContext);

    console.log("value:", contextvalue);

    return(
        <div>
            <h1>Component 4</h1>
            <h1>{contextvalue}</h1>
        </div>
    )
}