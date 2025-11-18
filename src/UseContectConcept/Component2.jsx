import { useContext } from "react"
import { MyContext } from "./Component1"

export const Component2 = () => {

    const {user} = useContext(MyContext);

    return(
        <div>
            <h1>User Details</h1>
            <h2>{user.name}</h2>
          
        </div>
    )
}