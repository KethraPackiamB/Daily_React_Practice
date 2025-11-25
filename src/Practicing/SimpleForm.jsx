import { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState(""); // typing state
  const [name, setName] = useState(""); // final submitted value

  const handleSubmit = (event) => {
    event.preventDefault();       // prevent refresh
    setName(inputValue);          // update final state only on submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // only input state updates
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Name: {name}</h2>
    </div>
  );
}

export default SimpleForm;
