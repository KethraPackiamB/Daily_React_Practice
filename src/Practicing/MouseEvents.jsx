import { useState } from "react";

export const MouseEvents = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1
        style={{
          width: "200px",
          height: "200px",
          background: "#010101",
          color: "#fff",
        }}
      >
        Hello
      </h1>
      {hover && <h2>This image is in hover</h2>}
    </div>
  );
};
