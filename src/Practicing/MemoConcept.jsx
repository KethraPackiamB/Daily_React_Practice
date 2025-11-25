import { memo, useState } from "react";

const EmployeeDetail = memo(function EmployeeDetail({ name, email }) {
  console.log("Name:", name);
  console.log("Email:", email);
  return (
    <div>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
    </div>
  );
});

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Email:{" "}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <EmployeeDetail name={name} />
    </>
  );
};
