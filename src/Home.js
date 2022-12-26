import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [auth, setAuth] = useLocalStorage("auth", null);
  useEffect(() => {
    if (auth) {
      fetch(
        "https://fir-d2d26-default-rtdb.firebaseio.com/books.json?auth=" +
          auth.idToken
      )
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
    }
  }, [auth]);
  return books.map((book) => (
    <div className="card mb-2" key={book.id}>
      <div className="card-body">
        {book.title}(<small>{book.language}</small>)<p>{book.author}</p>
        <p>Price: {book.price}</p>
      </div>
    </div>
  ));
}
