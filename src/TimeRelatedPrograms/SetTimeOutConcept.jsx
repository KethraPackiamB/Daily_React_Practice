import { useEffect, useState } from "react"
import { AdvertisementPage } from "./AdvertisementPage";

export const SetTimeOutConcept = () => {

    const [displayingContent, setDisplayingConcept] = useState(false);

    const showingContent = () => {
        setDisplayingConcept(true);
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            showingContent();
        },3000);

        return(()=>{
            clearInterval(timer);
        })
    },[]);

    return(
        <div>
          {displayingContent && <AdvertisementPage onHide={()=>{setDisplayingConcept(false)}}/>}
        </div>
    )
}