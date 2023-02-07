import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    age: 28,
    name: "Sanjeevan",
    message: "Blockchain is future",
  });

  const changeMessage = () => {
    setPerson({ age: 31 });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={change}>
        Change
      </button>
    </>
  );
};
