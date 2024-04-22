import React from "react";
import { useSelector } from "react-redux";
import "./BookList.css";
export default function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.lenght === 0 ? (
        <p>No books</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <div className=" book-info">
                {" "}
                {++i}. {book.title} by <strong>{book.autor}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
