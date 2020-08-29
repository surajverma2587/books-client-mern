import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../AppContext";
import BookList from "../components/BookList";

const Books = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let isCancelled = false;

    const getBooks = async () => {
      try {
        if (!isCancelled) {
          const { data } = await axios.get("http://localhost:4000/api/books");

          dispatch({ type: "SET_BOOKS_SUCCESS", books: data });
        }
      } catch (err) {
        if (!isCancelled) {
          dispatch({
            type: "SET_BOOKS_ERROR",
            error: "Error getting books",
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
          <h1>Form here</h1>
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
