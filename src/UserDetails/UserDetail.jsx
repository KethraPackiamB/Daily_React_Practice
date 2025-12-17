import { useEffect } from "react";
import { UserTable } from "./UserTable";

export const UserDetail = () => {

    const [userData, setUserData] = useState({});

    const fetchingUserData = async() => {
        const response = await fetch("");
        const data = await response.json();
        setUserData(data);
    }

    useEffect(()=>{
        fetchingUserData(),[]
    })

    return(
        <div>
            <UserTable userData={userData}/>
        </div>
    )
}