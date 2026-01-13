import { useState, useEffect} from "react";

export const Advertisement = () => {

    const [open, setOpen] = useState(false);

    const styling = {
        background : "rgba(45, 1, 45, 0.93)",
        padding : "20px",
        color : "#fff",
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setOpen(true);
        },3000);

        return(()=>{
            clearTimeout(timer);
        })
    },[]);



    return(
        <div>
            <center>
                <h1>Home Page</h1>
                {open && <div style={styling}>
                    <h1>Antique Jwellery</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia, dolorum eveniet expedita porro nostrum ratione ullam omnis ipsa quidem veritatis amet doloribus enim placeat distinctio suscipit earum cupiditate eos.</p>
                    <button onClick={()=>setOpen(false)}>X</button>
                </div>}
                
            </center>
        </div>
    )
}