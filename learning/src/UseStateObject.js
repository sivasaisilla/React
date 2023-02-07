import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    age: 28,
    name: "Sanjeevan",
    message: "Blockchain is future",
  });

  const changeMessage = () => {
    setPerson({ ...person, age: 31 });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change
      </button>
    </>
  );
};

export default UseStateObject;
