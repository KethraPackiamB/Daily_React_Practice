import { CountContext } from "./ContextComponent";
import { useContext } from "react";

export const IncrementButton = () => {

    const {increment} = useContext(CountContext);
    return(
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}