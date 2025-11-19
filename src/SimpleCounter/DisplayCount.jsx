import { CountContext } from "./ContextComponent";
import { useContext } from "react";

export const DisplayCount = () => {
  const { count } = useContext(CountContext);

  return (
    <div>
      <h2>Displaying Count Details</h2>
      <h1 style={{ fontSize: "50px" }}>{count}</h1>
    </div>
  );
};
