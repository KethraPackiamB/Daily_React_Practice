import { useState, useEffect} from "react";

export const TypingIndicator = () => {

    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(()=>{
        if(text === ""){
            setIsTyping(true);
        }

        const timer = setTimeout(()=>{
            setIsTyping(false);
        },1000);

        return(()=>{
            clearTimeout(timer);
        })
    },[text]);

    return(
       <div>
        <center>
        <h1>Message Typing Indicator</h1>
            <input type="text" placeholder="Type anything" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            {isTyping && <p>Typing....</p>}
        </center>
       </div>
    )
}