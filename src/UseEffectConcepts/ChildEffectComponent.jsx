import { useEffect } from "react";

export const ChildEffectComponent = (props) => {

    useEffect(()=>{
      console.log(props.details);
    },[props.details]);

    return(
        <div>
            {/* <h1>{props.details}</h1> */}
            <button onClick={props.click}>click</button>
        </div>
    )
}