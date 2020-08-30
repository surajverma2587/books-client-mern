import {
  SET_BOOKS_SUCCESS,
  SET_BOOKS_ERROR,
  ADD_TO_COLLECTION,
  REMOVE_FROM_COLLECTION,
} from "./types";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_BOOKS_SUCCESS:
      return { ...state, books: payload, loading: false, error: "" };
    case SET_BOOKS_ERROR:
      return { ...state, loading: false, error: payload };
    case ADD_TO_COLLECTION:
      return { ...state, books: [payload, ...state.books] };
    case REMOVE_FROM_COLLECTION:
      const deletedBook = payload;
      const newBooks = state.books.filter((book) => {
        return book._id !== deletedBook._id;
      });
      return { ...state, books: newBooks };
    default:
      return state;
  }
};

export default reducer;
