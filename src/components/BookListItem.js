import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AppContext from "../AppContext";
import { REMOVE_FROM_COLLECTION } from "../types";

const BookListItem = ({ id, title, author }) => {
  const { dispatch } = useContext(AppContext);

  const history = useHistory();

  const onClick = () => {
    history.push(`/books/${id}`);
  };

  const onDelete = async (event) => {
    event.stopPropagation();
    const { data } = await axios.delete(
      `http://localhost:4000/api/books/${id}`
    );
    dispatch({ type: REMOVE_FROM_COLLECTION, payload: data.data });
  };

  return (
    <li className="list-group-item" onClick={onClick}>
      <div className="row">
        <div className="col-10">
          {title} - {author}
        </div>
        <div className="col-2">
          <button className="btn btn-danger px-2 py-0" onClick={onDelete}>
            X
          </button>
        </div>
      </div>
    </li>
  );
};

export default BookListItem;
