import { createContext, useState } from "react";
import { DemoB } from "./DemoB";


export const ThemeContext = createContext();

export const DemoA = () => {

   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
        setTheme((curr)=>(curr === "light" ? "dark" : "light"));
   }

    return(
        <ThemeContext.Provider value={{theme}}>
            <h1>Demo Component A</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <DemoB theme={theme}/>
        </ThemeContext.Provider>
    )
}