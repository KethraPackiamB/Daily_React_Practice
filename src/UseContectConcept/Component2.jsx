import { useContext } from "react"
import { MyContext } from "./Component1"

export const Component2 = () => {

    const userDetails = useContext(MyContext);

    return(
        <div>
            <h1>User Details</h1>
            <h2>{userDetails.user.n}</h2>
          
        </div>
    )
}