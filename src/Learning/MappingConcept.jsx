 export const MappingConcept = () => {

   const fruits = ["banana", "apple", "mango"];

    return(
        <div>
            <ul>
            {fruits.map((fruits,index) => {
                <li key={index}>{fruits}</li>
            })}
            </ul>
            </div>
    )
}