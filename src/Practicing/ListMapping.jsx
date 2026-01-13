export const ListMapping = () => {

    const fruits = ["Apple","Mango","Orange","Banana","Grapes","Watermelon"];

    return(
        <div>
            <ul>
                {fruits.map((fruit,index)=>(
                    <li key={index}>{fruit}
                    <button>Select</button>
                    </li>
                ))}
                <p>{fruits[0]}</p>
            </ul>
        </div>
    )
}