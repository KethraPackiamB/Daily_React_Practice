import { useState } from 'react';

export const SubmittingForm = () => {

      const [name, setName] = useState("");

        console.log(name);


      const handleSubmit = (event) => {
        event.preventDefault();
    alert("Form submitted! Name: " + name);
  };

    return(
        <div>
             <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>

      <button type="submit">Submit</button>
    </form>
        </div>
    )
}