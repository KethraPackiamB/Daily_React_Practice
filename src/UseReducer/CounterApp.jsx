import { useReducer } from "react";

 const counterReducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count: state.count+1}

            case "DECREMENT":
                return {count: state.count-1}

            case "RESET":
                return {count : 0};
        
            default:
                throw Error("Invalid Action");
        }
    }

export const CounterApp = () => {


    const [state, dispatch] = useReducer(counterReducer, {count: 0});

    return(
        <div>
           <h1>{state.count}</h1>
            <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
            <button onClick={() => dispatch({type : "RESET"})}>Reset</button>
        </div>
    )

    
};

