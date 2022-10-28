import React, { useContext } from "react";
import { CardContext } from "./context/CardContext";

const Descript = () => {
  console.log("render Descript");

  const { user } = useContext(CardContext);
  const { email } = user;

  return (
    <div>
      <h2>{email}</h2>
    </div>
  );
};

export default Descript;
