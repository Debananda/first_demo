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
  return (
    <div className="row">
      {books.map((book) => (
        <div className="col-12 col-md-6 col-lg-4" key={book.id}>
          <div className="d-flex border rounded mb-2">
            <img
              src={book.img}
              alt={book.title}
              style={{ width: "100px" }}
              className="rounded-start"
            />
            <div className="ms-2">
              <h3>{book.title}</h3>
              <p>
                Language : <small>{book.language}</small>
              </p>
              <p>Author : {book.author}</p>
              <p>Price: {book.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
