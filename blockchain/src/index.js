import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Ineuron() {
  return (
    <section className="style">
      <h1>Book list is</h1>
      <Image />
      <Title />
      <Author />
    </section>
  );
}

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51NEM-RHlwL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      alt="Blockchain book"
    />
  );
};
const Title = () => {
  return <h2>The basics of Bitcoins and Blockchains</h2>;
};

const Author = () => {
  return <h4>Antony</h4>;
};

ReactDOM.render(<Ineuron />, document.getElementById("root"));
