import { useState, useRef } from "react";

export const LoginFormWithUseRef = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const loginDetailsRef = useRef();

  const handleStoreData = () => {
    console.log(loginDetailsRef.current.value);
    setLoginDetails(loginDetailsRef.current.value);
  };

  return (
    <div>
      <center>
        <form action="">
          <label htmlFor="">Email : </label>
          <input type="text" ref={loginDetailsRef} />
          <br />
          <label htmlFor="">Password :</label>
          <input type="text" ref={loginDetailsRef} />
        </form>

        <button onClick={handleStoreData}>Login</button>
      </center>
    </div>
  );
};
