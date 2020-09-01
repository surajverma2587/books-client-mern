import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../config";

const EditBookModal = ({ show, handleClose, book, setBook }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [synopsis, setSynopsis] = useState(book.synopsis);

  const onChangeTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const onChangeAuthor = (event) => {
    const value = event.target.value;
    setAuthor(value);
  };

  const onChangeSynopsis = (event) => {
    const value = event.target.value;
    setSynopsis(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      title,
      author,
      synopsis,
    };

    const { data } = await axios.put(
      `${BOOK_DETAILS_URL}/${book._id}`,
      payload
    );

    handleClose();
    setBook(data.data);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
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
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleClose}
          >
            Update Book
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditBookModal;
