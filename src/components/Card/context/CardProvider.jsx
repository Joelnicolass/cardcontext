import React, { useState } from "react";
import { CardContext } from "./CardContext";

const CardProvider = ({ children }) => {
  const [user, setUser] = useState({
    img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
    name: "Nico",
    email: "nico@gmail.com",
    status: false,
  });

  const [count, setCount] = useState(0);

  return (
    <CardContext.Provider
      value={{
        user,
        setUser,
        setCount,
        count,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
