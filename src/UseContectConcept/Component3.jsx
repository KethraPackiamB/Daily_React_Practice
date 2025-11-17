import { useContext } from "react";
import { MyContext } from "./Component1";

export const Component3 = () => {

    const worldValue = useContext(MyContext);

    return(
        <div>
            <h1>Component 3</h1>
            <h3>{worldValue}</h3>
        </div>
    )
}