import React from "react";

export const CreateElementConcept = () => {
  const element = React.createElement("h1", { id: "heading" }, "Hello world");

  return element;
};
