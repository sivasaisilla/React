import { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const reSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("event is triggered");
    window.addEventListener("resize", reSize);
    // return window.removeEventListener("resize", reSize);
  });

  console.log("rendering........");

  return (
    <>
      <h2>Screen Size</h2>
      <h3>{size} pX</h3>
    </>
  );
};

export default UseEffectCleanUp;
