import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">
        React Reading List
      </Link>
    </nav>
  );
};

export default Navbar;
