import { useState, useEffect } from "react";

export const ApiFetchWithErrorhandling = () => {

    const [user, setUser] = useState([]);

    const getApiData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!res.ok){
            throw new Error("The server error");
        }
        const response = await res.json();
        return response;
    }

    const displayApi = async() => {
        try{
        const api = await getApiData();
        setUser(api);
        }
        catch(err){
            console.log("the error occured");
        }
        finally{
            console.log("Finally executed");
        }
    }

    useEffect(() => {
        const timer = setTimeout(()=>{
            displayApi();
        },2000);

        return(()=> {
            clearTimeout(timer);
        })
    },[]);

    return(
        <div>
            <table>
                <thead>
                    <th>User_Id</th>
                    <th>Company_Name</th>
                    <th>Catch_Phrase</th>
                </thead>
                <tbody>
                    {user.map((users)=>(
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.company.name}</td>
                            <td>{users.company.catchPhrase}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}