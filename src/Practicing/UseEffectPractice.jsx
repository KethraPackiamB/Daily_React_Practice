import {useState, useEffect } from "react";

export const UseEffectPractice = (props) =>{

    const [staffData, setStaffData] = useState({
        name: "Alex",
        age: "30",
    });

    useEffect(()=> {
        console.log(staffData);
    })

    const [studentData, setStudentData] = useState({
        name: "Kethra Packiam",
        departmant: "ECE",
        college: "SSM Institute of Engineering and Technology",
    });

    

    const handleChange = () => {
         setStudentData({...studentData, name:"Gabriel Henry", departmant: "BDVV", college: "ITI"})
    }
        
    return(
        <div>
            <h1>UseEffect Practice</h1>
            <p>{studentData.name}</p>
            <p>{studentData.departmant}</p>
            <p>{studentData.college}</p>
            <button onClick={handleChange}>Click Me</button>
        </div>
    )
}