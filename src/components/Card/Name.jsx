import React, { useContext } from "react";
import { CardContext } from "./context/CardContext";

const Name = () => {
  console.log("render Name");
  const { user } = useContext(CardContext);
  const { name } = user;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Name;
