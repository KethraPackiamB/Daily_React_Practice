import { useState, useEffect } from "react";

export const ErrorHandlingWithTryCatch = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (!userDetails) {
      throw new Error("The data is not there");

      
    }
    const timer = setTimeout(()=>{
        handleShow();
      },2000);

      return(() => {
        clearTimeout(timer);
      })

   
  },[]);

   const handleShow = () => {
      setUserDetails([
        {
          id : "1",
          name: "Kethra Packiam",
          email: "kethrapackiam@gmail.com",
        },
        {
          id : "2",
          name: "Gabriel Henry",
          email: "gabrielHenry@gmail.com",
        },
        {
          id : "3",
          name: "Jaqulin Sara Lily",
          email: "jaqulinsaralily@gmail.com",
        },
        {
          id : "4",
          name: "Benadic Sahaya Raja",
          email: "benadicsahayaraja@gmail.com",
        },
      ]);
    };

  return (
        <div>
            

            <table>
                <thead>
                    <th>User_ID</th>
                    <th>User_Name</th>
                    <th>User_Email</th>
                </thead>
                <tbody>
                    {
                        userDetails.map((users)=> (
                            <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
  )
  
};
