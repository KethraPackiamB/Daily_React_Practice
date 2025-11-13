import { ChildComponent } from "./ChildComponent";
import { useState } from "react";

export const DemoProps = () => {
  const [data, setData] = useState(1);

  const [user, setUser] = useState({
    name: "John",
    age: 24,
  });

  const updateData = () => {
    setData(3);
  };

  const updateUser = () => {
    setUser({ name: "mala", age: 20 });
  };

  return (
    <>
      <div>
        <h1>number : {data}</h1>
        <button onClick={updateData}>click me</button>
      </div>
      <div>
        <h1>{user.name}</h1>
        <h2>{user.age}</h2>
        <button onClick={updateUser}>Update User</button>
      </div>
    </>
  );
};
