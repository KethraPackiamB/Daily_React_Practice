import {useState} from "react";
import { ChildrenComponent } from "./ChildrenComponent"

export const ParentComponent = () => {

    const [data, setData] = useState(
        {
            name: "Alice",
            age: "21",
            college: "SSMIET"
        }
    )

    const updateData = () => {
        setData(
            {...data, name:"Kethra"}
        )
    }
   
    const [inputValue, setInputValue] = useState("");

    const updateInputValue =(e) => {
        setInputValue(e.target.value);
    }

    const [jsonData, setJsonData] = useState({
        name: "",
        age: ""
    });

    

    const handleJsonData = (key,value) => {
        setJsonData({...jsonData, [key]: value})
    }

   

    return(
        <div>
            <h1>Parent Component</h1>
            <ChildrenComponent data={data} inputValue={inputValue} jsonData={jsonData}/>
            <button onClick={updateData}>Click</button>
            <input type="text" placeholder="Enter Something" onChange={updateInputValue}></input>
            <h1>{inputValue}</h1>


            <form>
                <label htmlFor="">Enter Your Name:</label>
                <input type="text" onChange={(e)=>handleJsonData("name", e.target.value)}/>
                <label htmlFor="">Enter Your Age:</label>
                <input type="text" onChange={(e)=>handleJsonData("age", e.target.value)}/>
                
            </form>

            
        </div>
    )
}