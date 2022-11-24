import React, { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://fir-d2d26-default-rtdb.firebaseio.com/books.json")
      .then((data) => data.json())
      .then((result) => {
        const arr = [];
        result.forEach((row) => {
          if (row) {
            arr.push({ ...row });
          }
        });
        setBooks(arr);
      });
  });
  return books.map((book) => (
    <div className="card mb-2" key={book.id}>
      <div className="card-body">
        {book.title}(<small>{book.language}</small>)<p>{book.author}</p>
        <p>Price: {book.price}</p>
      </div>
    </div>
  ));
}
