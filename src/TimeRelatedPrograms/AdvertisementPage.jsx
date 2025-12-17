export const AdvertisementPage = ({onHide}) => {

    const style = {
        background: "#890",
        padding : "20px",
        margin : "20px",
    }

    return(
        <div style={style}>
            <h1>Pears Soap</h1>
            <h2>For Clear and glowing skin, Use Pears</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quos vitae error non itaque id quo est dolorem nostrum dignissimos, minus totam voluptates reprehenderit possimus necessitatibus, repudiandae sapiente ipsam et?</p>
            <button onClick={onHide}>Close</button>
        </div>
    )
}