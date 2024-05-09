import React from "react";
import { Link } from "react-router-dom";
import "./NoRoutesFound.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Not Found</h1>
      <p className="not-found-message">
        The page you're looking for does not exist.
      </p>
      <p className="not-found-return">
        Return to{" "}
        <Link to="/" className="not-found-link">
          Home
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
