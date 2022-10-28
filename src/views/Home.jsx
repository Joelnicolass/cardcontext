import React from "react";
import Card from "../components/Card/Card";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "whitesmoke",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundColor: "#161616",
      }}
    >
      <h1>Home</h1>
      <Card />
    </div>
  );
};

export default Home;
