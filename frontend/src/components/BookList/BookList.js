import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import "./BookList.css";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleChange = (id) => {
    dispatch(toggleFavorite(id));
  };

  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const count = books.filter((book) => book.isFavorite).length;
    setFavoriteCount(count);
  }, [books]);

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {book.year ? (
                  <span>
                    <strong>{++i}.</strong> {book.title} by{" "}
                    <strong>{book.author}</strong> in {book.year}
                  </span>
                ) : (
                  <span>
                    <strong>{++i}.</strong> {book.title} by{" "}
                    <strong>{book.author}</strong>
                  </span>
                )}
              </div>
              <div className="book-actions">
                <span onClick={() => handleChange(book.id)}>
                  {book.isFavorite ? (
                    <FaStar className="star-icon" />
                  ) : (
                    <FaRegStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="counter">How many are favorite: {favoriteCount}</div>
    </div>
  );
}
