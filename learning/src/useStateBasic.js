import "./index.css";
import React, { useState } from "react";

const UseStateBasic = () => {
  const [message, setMessage] = useState("React is Easy");
  const changedRes = () => {
    setMessage("React is Hard");
  };
  return (
    <>
      <h2>{message}</h2>
      <button className="btn" onClick={changedRes}>
        Change
      </button>
    </>
  );
};

export default UseStateBasic;
