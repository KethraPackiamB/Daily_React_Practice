import {createContent} from "./Component1";
import { useContext } from "react";

export const Component4 = () => {

    const {value} = useContext(createContent);

    return(
        <div>
            <h1>Component 4</h1>
            <h1>{value}</h1>
            
            
           
        </div>
    )
}