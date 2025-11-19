import { useState } from "react";
import { createContext } from "react";
import { ImplementingTheme } from "./ImplementingTheme";

export const ThemeContext = createContext();

export const SettingTheme = () => {

    const [theme, setTheme] = useState("light");

        const handleThemeChange = () => {
            setTheme((currentState)=> (currentState === "light" ? "dark" : "light"));
        }

    return(
        <ThemeContext.Provider value={{theme}}>
            <center>
                <h1>Theme Switcher</h1>
                <button onClick={handleThemeChange}>Change Theme</button>
                <ImplementingTheme/>
            </center>
            
        </ThemeContext.Provider>
    )
}