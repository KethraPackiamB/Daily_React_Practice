import { useReducer } from "react";

const counterReducer = (state,action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count : state.count+1};
        case "DECREMENT":
            return {count : state.count-1};

        case "RESET":
            return {count: 0}
    
        default:
            break;
    }
}

const BasicCounter = () => {

    const [state, dispatch] = useReducer(counterReducer,{count: 0});

    console.log(state);

    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
            <button onClick={()=>dispatch({type : "RESET"})}>Reset</button>
        </div>
    )
}

export default BasicCounter;