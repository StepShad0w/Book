import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import "./BookList.css";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/sliceFilter";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitleFilter);
  const auhtorFilter = useSelector(selectAuthorFilter);
  const onlyFavotite = useSelector(selectOnlyFavoriteFilter)
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleChange = (id) => {
    dispatch(toggleFavorite(id));
  };
  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(auhtorFilter.toLowerCase());
    const matchesFavorite = onlyFavotite ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite;
  });

  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const count = books.filter((book) => book.isFavorite).length;
    setFavoriteCount(count);
  }, [books]);

  const highlightMatch = (text, filter)=>{
    if(!filter) return text
    const regex = new RegExp(`(${filter})`, "gi")
    return text.split(regex).map((part, i)=>{
      if(part.toLowerCase() === filter.toLowerCase()){
        return(
          <span key={i} className="highlight">
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {book.year ? (
                  <span>
                    <strong>{++i}.</strong> {highlightMatch(book.title, titleFilter)} by{" "}
                    <strong>{highlightMatch( book.author, auhtorFilter  )}</strong> in {book.year}
                  </span>
                ) : (
                  <span>
                    <strong>{++i}.</strong> {highlightMatch(book.title, titleFilter)} by{" "}
                    <strong>{highlightMatch( book.author, auhtorFilter  )}</strong>
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
