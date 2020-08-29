import React from "react";

const BookListItem = ({ title, author }) => {
  return (
    <li className="list-group-item">
      {title} - {author}
    </li>
  );
};

export default BookListItem;
