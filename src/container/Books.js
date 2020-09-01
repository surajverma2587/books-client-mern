import React, { useContext, useEffect } from "react";
import axios from "axios";

import AppContext from "../AppContext";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { SET_BOOKS_SUCCESS, SET_BOOKS_ERROR } from "../types";
import { BOOK_DETAILS_URL } from "../config";

const Books = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let isCancelled = false;

    const getBooks = async () => {
      try {
        if (!isCancelled) {
          const { data } = await axios.get(BOOK_DETAILS_URL);

          dispatch({ type: SET_BOOKS_SUCCESS, payload: data });
        }
      } catch (err) {
        if (!isCancelled) {
          dispatch({
            type: SET_BOOKS_ERROR,
            payload: "Error getting books",
          });
        }
      }
    };

    getBooks();

    return () => {
      isCancelled = true;
    };
  }, [dispatch]);

  if (state.loading) return <div>Loading ...</div>;

  return (
    <section>
      {state.error && <h3>{state.error}</h3>}
      <div className="row p-3 text-center">
        <div className="col-6">
          <h1>Add a new Book</h1>
          <BookForm />
        </div>
        <div className="col-6">
          <h1>List of books here</h1>
          <BookList books={state.books} />
        </div>
      </div>
    </section>
  );
};

export default Books;
