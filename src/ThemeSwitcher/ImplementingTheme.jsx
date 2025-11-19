import { useContext } from "react"
import { ThemeContext} from "./SettingTheme";

export const ImplementingTheme = () => {

    const {theme} = useContext(ThemeContext);

    const styling = {
        backgroundColor : theme === "light" ? "#fff" : "#000",
        color : theme === "light" ? "#000" : "#fff",
        height : "50vh",
    }

    return(
        <div style= {styling}>
            <h1 style={{paddingTop: "130px"}}>Theme : {theme}</h1>
        </div>
    )
}