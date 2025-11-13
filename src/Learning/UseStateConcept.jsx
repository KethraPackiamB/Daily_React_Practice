import { useEffect, useState } from "react";

export const UserStateConcept = () => {

    const [name, setName] = useState("Alice");

    const [details, setDetails] = useState({
        name: "Kethra",
        age: "21",
        college: "SSMIET"
    })

    const updateName =() => {
        setName("Sheeba");
    }

    const updateDetails = () => {
        setDetails({...details, name:"Sheeba"});
    }

    const [count, setCount] = useState(0);

    const inCrement = () => {
        setCount(count+2);
    }

    const [data, setData] = useState({});

    const updateLakshiData = () => {
        setData(
            {name:"Lakshitha",
        age: "21",
        college: "SSMIET",
        department: "ECE"})
    }

    useEffect(() => {updateLakshiData()},[data]);

return(
        <div>
            <center>
            <h1>{name}</h1>
            <button onClick={updateName}>Click</button>

            <h2>Student Details</h2>
            <p>{details.name}</p>
             <p>{details.age}</p>
              <p>{details.college}</p>

              <button onClick={updateDetails}>click</button>
              <button onClick={()=>{setDetails({...details, name:"paulina"})}}>change</button>


              <h1>{count}</h1>
              <button onClick={inCrement}>Increase Count</button>

              <h2>{data.name}</h2>
               <h2>{data.age}</h2>
                <h2>{data.college}</h2>
                 <h2>{data.department}</h2>

                 <button></button>
              </center>
        </div>
    )
}