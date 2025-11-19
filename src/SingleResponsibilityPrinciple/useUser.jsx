import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return user;
};
