import React from "react";
import BookListItem from "./BookListItem";

const BookList = ({ books }) => {
  return (
    <ul className="list-group">
      {books.map((book) => {
        return (
          <BookListItem
            key={book._id}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </ul>
  );
};

export default BookList;
