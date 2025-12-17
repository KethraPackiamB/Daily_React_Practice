import { useState } from "react"

export const InitialitaionNeeds = () => {

  

    const [personalDetails, setPersonalDetails] = useState(null);
    const [fruits, setFruits] = useState([]);


return (
            <div>
            <h1> {`Hello ${personalDetails?.name}`}</h1>
            <input type="text" onChange={(e)=> {setFruits(e.target.value)}}/>
            <h2>{fruits}</h2>
            </div>
        );
        
    
}

   