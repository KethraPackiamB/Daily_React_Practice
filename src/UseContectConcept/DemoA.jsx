import { useState } from "react";
import { DemoB } from "./DemoB";

export const DemoA = () => {

   const [theme, setTheme] = useState("dark");

   const toggleTheme = () => {
        setTheme
   }

    return(
        <div>
            <h1>Demo Component A</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <DemoB theme={theme}/>
        </div>
    )
}