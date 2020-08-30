import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import EditBookModal from "../../components/EditBookModal";

const BOOK_DETAILS_URL = "http://localhost:4000/api/books";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${BOOK_DETAILS_URL}/${id}`);
      setBook(data);
    };

    fetchData();
  }, [id]);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const formatDate = (date) => {
    return moment(date).format("MMMM Do YYYY");
  };

  if (book) {
    return (
      <Fragment>
        <EditBookModal
          show={show}
          handleClose={handleClose}
          book={book}
          setBook={setBook}
        />
        <div className="container text-center">
          <h1 className="my-4">{book.title} details</h1>
          <div className="card text-center">
            <div className="card-header">{book.title}</div>
            <div className="card-body">
              <h5 className="card-title">{book.author}</h5>
              <p className="card-text">{book.synopsis}</p>
            </div>
            <div className="card-footer text-muted">
              {formatDate(book.date)}
            </div>
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleShow}
            >
              Edit
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <div className="container text-center">
      <h1>Book not found</h1>
    </div>
  );
};

export default BookDetails;
