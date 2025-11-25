import React, { useRef } from "react";

export const InputFocus = () => {

    const inputRef = useRef(null);  // creating reference

  const handleClick = () => {
    inputRef.current.focus();     // focus the input field
  };

    return(
        <div>
             <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button onClick={handleClick}>Focus Input</button>
        </div>
    )
}