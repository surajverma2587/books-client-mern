import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/books/:id" exact component={BookDetails} />
    </Switch>
  );
};

export default Router;
