import React from "react";
import Btn from "./Btn";
import CardProvider from "./context/CardProvider";
import Descript from "./Descript";
import Name from "./Name";
import ProfileImg from "./ProfileImg";
import Status from "./Status";

const Card = () => {
  return (
    <CardProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "#161616",
          border: "1px solid black",
          backgroundColor: "whitesmoke",
          borderRadius: "20px",
          width: "500px",
          height: "90px",
        }}
      >
        <ProfileImg />
        <div>
          <Name />
          <Descript />
        </div>
        <div>
          <Btn />
          <Status />
        </div>
      </div>
    </CardProvider>
  );
};

export default Card;
