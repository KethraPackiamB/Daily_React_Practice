import { useState, useRef } from "react";

export const UseRefConcept = () => {
  const [name, setName] = useState("");

  const nameRef = useRef();

  console.log("Component Rerendered");

  const display = () => {
    console.log(nameRef.current.value);
    setName(nameRef.current.value);
  };

  return (
    <div>
      <h1>UseRef concept</h1>
      <input
        type="text"
        ref={nameRef}
        // value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>

      <button onClick={display}>Submit</button>
    </div>
  );
};
