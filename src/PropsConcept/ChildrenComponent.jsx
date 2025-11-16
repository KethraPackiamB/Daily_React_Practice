export const ChildrenComponent = ({data, inputValue, jsonData}) => {

    

    return(
        <div>
           
            <h2>{data.name}</h2>
            <h3>{data.age}</h3>
            <p>{data.college}</p>
            <p>{inputValue}</p>

            <h1>{jsonData.name}</h1>
            <h1>{jsonData.age}</h1>

           


            
        </div>
    )
}