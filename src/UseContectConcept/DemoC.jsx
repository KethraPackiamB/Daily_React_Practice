import { ThemeContext } from "./DemoA";
import { useContext } from "react";

export const DemoC = () => {

    const {theme} = useContext(ThemeContext);

    // console.log("Context Value :", contextValue)

    const textStyle = {
        fontSize : theme === "light" ? "30px" : "50px",
        color : theme === "light" ? "blue" : "red",
    }

    return(
        <div>
            <h1 style={textStyle}>Demo Component C</h1>
        </div>
    )
}