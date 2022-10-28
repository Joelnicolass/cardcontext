import React, { useContext } from "react";
import { CardContext } from "./context/CardContext";

const ProfileImg = () => {
  const { user } = useContext(CardContext);
  const { img } = user;

  return (
    <div
      style={{
        border: "1px solid black",
        borderColor: "whitesmoke",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default ProfileImg;
