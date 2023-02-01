import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { bookList } from "./bookList";
import Image from "./image";

// //////////////////////////////
// Component resusability using props and storing the required data in each object
// //////////////////////////////

// //creating a function to render each component

// function Ineuron() {
//   return (
//     <section className="bookList">
//       <Image
//         img={BookList1.Images}
//         titl={BookList1.Title}
//         author={BookList1.Author}
//       ></Image>
//       <Image
//         img={BookList2.Images}
//         titl={BookList2.Title}
//         author={BookList2.Author}
//       ></Image>
//       <Image
//         img={BookList3.Images}
//         titl={BookList3.Title}
//         author={BookList3.Author}
//       ></Image>
//       <Image
//         img={BookList4.Images}
//         titl={BookList4.Title}
//         author={BookList4.Author}
//         // parent props
//       >
//         <p>Hello Peeps!</p>
//         {/* CHild prop */}
//       </Image>
//     </section>
//   );
// }

// //component for we created and having required manipulations inside it using props
// const Image = (props) => {
//   const { img, titl, author, children } = props;
//   return (
//     <div className="book">
//       <img src={img} alt="Image" />
//       <h2>{titl}</h2>
//       <h4>{author}</h4>
//       <h2>{children}</h2>
//     </div>
//   );
// };

// ///////////////////////////////////////////////////
// Using Array of objects for storing data and reusability
// ///////////////////////////////////////////////////

// const books = ["Sivasai", "Hyder", "Navin"];
// function Ineuron() {
//   return (
//     <h2>
//       {/* Iterating every element in books using map method */}
//       {books.map((e) => {
//         return e;
//       })}
//     </h2>
//   );
// }

/*
//////////////////////////////////////
Making the above code more efficient
//////////////////////////////////////
*/

function Ineuron() {
  return (
    <section className="bookList">
      {bookList.map((book) => {
        return <Image book={book} />;
      })}
    </section>
  );
}

//rendering the file
ReactDOM.render(<Ineuron />, document.getElementById("root"));
