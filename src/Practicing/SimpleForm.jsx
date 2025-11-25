import { useState } from "react";

function SimpleForm() {
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault();       
    setName(inputValue);          
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Name: {name}</h2>
    </div>
  );
}

export default SimpleForm;
