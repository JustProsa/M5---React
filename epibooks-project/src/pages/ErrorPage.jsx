import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>OOOOPS! C'E' UN ERRORE!</h1>
      <button>
        <Link to={"/"}>Torna alla HOMEPAGE</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
