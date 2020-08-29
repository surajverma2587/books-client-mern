import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import AppContext from "./AppContext";
import reducer from "./reducer";

const App = () => {
  const initialState = {
    books: [],
    loading: true,
    error: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </AppContext.Provider>
  );
};

export default App;
