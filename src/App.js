import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import AppContext from "./AppContext";

const appReducer = (state, action) => {
  if (action.type === "GET_ALL_BOOKS") {
    return { ...state, books: action.books, loading: false, error: "" };
  } else if (action.type === "FETCH_ERROR") {
    return { ...state, loading: false, error: action.error };
  }
  return state;
};

const App = () => {
  const initialState = {
    books: [],
    loading: true,
    error: "",
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
