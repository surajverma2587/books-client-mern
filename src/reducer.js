const reducer = (state, { type, payload }) => {
  if (type === "SET_BOOKS_SUCCESS") {
    return { ...state, books: payload, loading: false, error: "" };
  } else if (type === "SET_BOOKS_ERROR") {
    return { ...state, loading: false, error: payload };
  } else if (type === "ADD_TO_COLLECTION") {
    const newBooks = [payload, ...state.books];
    return { ...state, books: newBooks };
  }
  return state;
};

export default reducer;
