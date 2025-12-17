import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState(null);

  const fetchingUser = () => {
     fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }

  useEffect(() => {
   fetchingUser();
  }, []);

  return user;
};
