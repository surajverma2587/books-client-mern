import React, { useState, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext";
import { ADD_TO_COLLECTION } from "../types";
import Popup from "./Popup";
import { BOOK_DETAILS_URL } from "../config";

const BookForm = () => {
  const { dispatch } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    resetForm();
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const onChangeSynopsis = (event) => {
    setSynopsis(event.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setSynopsis("");
    setError("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (title && author && synopsis) {
      try {
        const { data } = await axios.post(BOOK_DETAILS_URL, {
          title,
          author,
          synopsis,
        });

        setShow(true);

        dispatch({ type: ADD_TO_COLLECTION, payload: data });
      } catch (error) {
        setError("Something went wrong adding your book!");
      }
    } else {
      setError("Please enter the required information!");
    }
  };

  const renderModal = () => {
    if (show) {
      return (
        <Popup
          show={show}
          handleClose={handleClose}
          title="Success"
          text={`${title} added to database!!`}
        />
      );
    }
    return null;
  };

  return (
    <form onSubmit={onSubmit}>
      {error && <small className="form-text text-danger my-3">{error}</small>}
      {renderModal()}
      <div className="form-group row">
        <label htmlFor="title" className="col-2 col-form-label">
          Title
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="author" className="col-2 col-form-label">
          Author
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={onChangeAuthor}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="synopsis" className="col-2 col-form-label">
          Synopsis
        </label>
        <div className="col">
          <textarea
            type="text"
            className="form-control"
            id="synopsis"
            value={synopsis}
            onChange={onChangeSynopsis}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
