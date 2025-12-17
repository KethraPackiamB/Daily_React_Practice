import {useState, useEffect} from "react";

export const WithDependencyValueArray = () => {

     const [count, setCount] = useState(0);
    
        useEffect(()=>{
            console.log("Rendering.....");
        },[count]);
    
        return(
            <div>
                <h1>Count : {count}</h1>
                <button onClick={()=>setCount(count+1)}>Click me</button>
            </div>
        )
    }