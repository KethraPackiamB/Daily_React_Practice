import { useState,useEffect } from "react";

export const WithOutDependencyArray = () => {

    const [count, setCount] = useState(0);
    const [user, setUser] = useState("Kethra Packiam");



    useEffect(()=>{
        console.log("Rendering.....");
    });

    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <button onClick={()=>setUser("Gabriel Henry")}>change</button>
            <h4>{user}</h4>
        </div>
    )
}