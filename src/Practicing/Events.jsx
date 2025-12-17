import { useState } from "react";

export const Events = () => {

    const [name, setName] = useState("");

    const handleClick = (e) => {
        console.log(e);
        console.log(e.nativeEventent);
        }

    const handleChange = (e) => {
        setName(e.target.value);
        console.log(e);
        console.log(e.nativeEvent);
        
    }

    return(
        <div>
            <h1>Handling Event</h1>
            <button type="submit" onClick={handleClick}>Click Me</button>
            <input type="text" onChange={handleChange} />
            <h2>{name}</h2>
        </div>
    )
}