import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../AppContext";

const Books = () => {
  const { books, loading, error, dispatch } = useContext(AppContext);

  useEffect(() => {
    let isCancelled = false;

    const getBooks = async () => {
      try {
        if (!isCancelled) {
          const { data } = await axios.get("http://localhost:8000/books");

          dispatch({ type: "GET_ALL_BOOKS", books: data });
        }
      } catch (err) {
        if (!isCancelled) {
          dispatch({
            type: "FETCH_ERROR",
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

  if (loading) return <div>Loading ...</div>;

  console.log(books);
  return (
    <section>
      {error && <h3>{error}</h3>}
      <div className="row p-3 text-center">
        <div className="col-6">
          <h1> stuff</h1>
        </div>
        <div className="col-6">
          <h1>renderBooks</h1>
        </div>
      </div>
    </section>
  );
};

export default Books;
