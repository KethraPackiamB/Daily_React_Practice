import { DemoC } from "./DemoC"

export const DemoB = ({theme}) => {

    const textStyle = {
        backgroundColor : theme === "light" ? "#fff" : "#000",
        color : theme === "light" ? "#000" : "#fff",
    }

   

    return(
        <div>
            <h1 style={textStyle}>Demo Component B</h1>
            <DemoC theme={theme}/>
        </div>
    )
}