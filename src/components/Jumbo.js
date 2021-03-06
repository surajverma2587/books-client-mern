import React from "react";
import PropTypes from "prop-types";

const Jumbo = ({ title }) => {
  return (
    <div className="col-6 text-center p-4">
      <div
        className="jumbotron d-flex align-items-center justify-content-center"
        style={{ height: "300px" }}
      >
        <h1 className="display-4">{title}</h1>
      </div>
    </div>
  );
};

Jumbo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Jumbo;
