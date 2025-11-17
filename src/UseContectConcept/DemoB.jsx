export const DemoB = ({theme}) => {

    const fontStyling = {
        backgroundColor : theme=== "dark" ? "#000" : "#fff",
        color : theme=== "dark" ? "#fff" : "#000"
    }

    return(
        <div>
            <h1 style={fontStyling}>Demo Component B</h1>
        </div>
    )
}