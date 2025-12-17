import { useState } from 'react';
import { ChildEffectComponent } from './ChildEffectComponent';


export const Comparing = () => {

    const [personalDetails, setPersonalDetails] =useState({
        name:"Bala",
        age: "23"
    });

    // const [userDetails, setUserDetails]= useState({
    //     data: "Bala",
    //     age: "24"
    // });


    const details = personalDetails;
    // const user = userDetails;


    // console.log(JSON.stringify(details)=== JSON.stringify(user)); 
   
    const handleClick = () => {
        setPersonalDetails({
           ...personalDetails, name:"Krishnan",
            
        })
    }
    

    return(
        <div>
            <h1>Practicing UseEffect</h1>
            <ChildEffectComponent details={details} click={handleClick}/>
            
        </div>
    )
}