import { useState, useEffect } from "react";

export const AutomaticLogOut = () => {
  const [message, setMessage] = useState("");
  const [timeData, setTimeData] = useState(30);
  const [stateChange, setStateChange] = useState(true);

  const styling = {
    background: "#000",
    color: "#fff",
    padding: "20px",
    margin: "20px",
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimeData((prev) => prev - 1);
    }, 1000);

    if (timeData === 10) {
      setMessage("You are going to logout soon");
    }
    if (timeData === 0) {
      setStateChange(false);
      setMessage("You're logged out");
    }

    return () => {
      clearInterval(timerID);
    };
  }, [timeData]);

  const handleChange = () => {
    setStateChange(false);
    setMessage("You're logged out");
  };

  return (
    <div>
      <center>
        {stateChange && (
          <div style={styling}>
            <h1>Instagram</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              blanditiis tempora eius mollitia dolorem facere quisquam! Enim
              illum doloribus unde minima nostrum, autem non itaque tenetur
              officiis! Veritatis, ratione totam?
            </p>
            <p>Timer : {timeData}s</p>
            <p>{message}</p>
            <button onClick={handleChange}>logout</button>
          </div>
        )}
        <p>{message}</p>
      </center>
    </div>
  );
};
