import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Ineuron() {
  return (
    <div className="siva">
      <Blockchain />
      <Blockchain />
      <Blockchain />
      <Blockchain />
    </div>
  );
}

const Blockchain = () => {
  return <h4>Blockchain + React is Deadly</h4>;
};

ReactDOM.render(<Ineuron />, document.getElementById("root"));
