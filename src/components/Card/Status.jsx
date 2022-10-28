import React, { useContext } from "react";
import { CardContext } from "./context/CardContext";

const Status = () => {
  const { user } = useContext(CardContext);
  const { status } = user;

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        backgroundColor: `${status ? "green" : "red"}`,
      }}
    ></div>
  );
};

export default Status;
