import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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

const bookList = [
  {
    Images:
      "https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg",
    Title: "Blockchain Technology: Concepts and Applications",
    Author: "Kumar Saurabh and Ashutosh Saxena",
  },
  {
    Images:
      "https://m.media-amazon.com/images/I/61ItRb1o7nL._AC_UY436_FMwebp_QL65_.jpg",
    Title: "MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN",
    Author: "Andreas M. Antonopoulos ",
  },
  {
    Images:
      "https://m.media-amazon.com/images/I/71A-8Cr9cxL._AC_UY436_FMwebp_QL65_.jpg",
    Title: "Blockchain Technology: Concepts and Applications",
    Author: "Kumar Saurabh and Ashutosh Saxena",
  },
  {
    Images:
      "https://m.media-amazon.com/images/I/51i0-FJQZjL._AC_UY436_FMwebp_QL65_.jpg",
    Title: "BLOCKCHAIN",
    Author: "Don Tapscott",
  },
];

function Ineuron() {
  return (
    <section className="bookList">
      {bookList.map((book) => {
        return <Image book={book} />;
      })}
    </section>
  );
}

const Image = (props) => {
  const { Images, Title, Author } = props.book;
  return (
    <article className="books">
      <img src={Images} alt="" />
      <h2>{Title}</h2>
      <h4>{Author}</h4>
    </article>
  );
};

//rendering the file
ReactDOM.render(<Ineuron />, document.getElementById("root"));
