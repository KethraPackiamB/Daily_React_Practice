import { useEffect, useRef, useState } from "react";

export const AutoLogOut = () => {

    const [timeLeft, setTimeLeft] = useState(10);
    const [warning, setWaring] = useState("");

    

    useEffect(()=> {
        const intervalTime = setInterval(()=> {
            setTimeLeft((prev)=> prev - 1);
            
        },1000);

    const warningMessage = setTimeout(()=>{
            setWaring("You will be logged out soon");
        },5000);

        return(()=>{
            clearInterval(intervalTime);
            clearTimeout(warningMessage);
        })
    },[]);

    useEffect(()=>{
        if(timeLeft === 0){
          setWaring("You are logged out");
          }
    },[timeLeft]);

    return(
        <div>
            <center>
            <h1>Auto Logout System</h1>
            <br />
            <h2>{timeLeft}s</h2>
            <br />
            <p>{warning}</p>
            </center>
        </div>
    )
}