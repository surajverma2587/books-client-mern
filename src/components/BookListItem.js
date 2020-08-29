import React from "react";
import { useHistory } from "react-router-dom";

const BookListItem = ({ id, title, author }) => {
  const history = useHistory();

  const onClick = (event) => {
    const id = event.target.id;
    history.push(`/books/${id}`);
  };

  return (
    <li id={id} className="list-group-item" onClick={onClick}>
      {title} - {author}
    </li>
  );
};

export default BookListItem;
