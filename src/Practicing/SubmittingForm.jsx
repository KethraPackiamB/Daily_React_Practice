import { useState } from "react";

export const SubmittingForm = () => {
  const [name, setName] = useState("");
  const [submitName, setSubmitName] = useState("");

  console.log(submitName);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitName(name);
    // alert("Form submitted! Name: " + name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <h1>{submitName}</h1>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
