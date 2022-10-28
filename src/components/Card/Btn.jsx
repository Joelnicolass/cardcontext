import React, { useContext } from "react";
import { CardContext } from "./context/CardContext";

const Btn = () => {
  const { setCount } = useContext(CardContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        cambiar status
      </button>
    </div>
  );
};

export default Btn;
