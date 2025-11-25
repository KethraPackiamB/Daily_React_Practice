import { useEffect, useState } from "react";
import { UserTable } from "./UserTable";

export const CallingAPI = () => {
  const [users, setUsers] = useState([]);

  const callApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      <UserTable users={users} />
    </div>
  );
};
