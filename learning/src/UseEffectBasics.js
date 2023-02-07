import { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 2) {
      document.title = `New Message(${value})`;
    }
  });

  return (
    <>
      <h2>Use effect Basic Idea</h2>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseEffectBasic;
