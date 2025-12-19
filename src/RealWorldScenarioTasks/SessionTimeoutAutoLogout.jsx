import { useEffect, useState } from "react";

export const SessionTimeoutAutoLogout = () => {
  const sessionTime = 30;
  const warningTime = 10;

  const [timeLeft, setTimeLeft] = useState(sessionTime);
  const [message, setMessage] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft === warningTime) {
      setMessage("You're going to logged out soon");
    }

    if (timeLeft <= 0) {
      setMessage("You're Logged out");
      setLoggedOut(true);
    }

    return () => {
      clearInterval(intervalID);
    };
  }, [timeLeft, loggedOut]);

  useEffect(() => {
    const clearTimer = () => {
      if (!loggedOut) {
        setTimeLeft(sessionTime);
        setMessage("");
      }
    };
    window.addEventListener("keydown", clearTimer);
    window.addEventListener("mousemove", clearTimer);

    return () => {
      window.removeEventListener("keydown", clearTimer);
      window.removeEventListener("mousemove", clearTimer);
    };
  }, [loggedOut]);

  return (
    <div>
      <h1>Session Timout and Auto Logout system</h1>
      <p>TimeLeft : {timeLeft}s</p>
      <p>Message : {message}</p>
    </div>
  );
};
