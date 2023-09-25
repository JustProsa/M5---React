import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import SearchForm from "../searchForm/SearchForm";
import ProvaCounter from "../provaCounter/ProvaCounter";
import { BookProvider } from "../../contexts/bookContext";

const Jumbotron = () => {
  // const {
  //   books,
  //   setBooks,
  //   isLoading,
  //   setIsLoading,
  //   error,
  //   setError,
  //   filteredBooks,
  //   setFilteredBooks,
  // } = useContext(BookProvider);

  const jumbotronStyle = {
    width: "100%",
    height: "15rem",
    border: "none",
    backgroundColor: "rgba(34, 113, 179, 0.2)",
  };
  return (
    <>
      <Card style={jumbotronStyle}>
        <Card.Body className="position-relative">
          <h1 className="position-absolute top-10 start-50 translate-middle">
            WELCOME TO EPIBOOKS
          </h1>
          <SearchForm className="position-absolute top-50 start-50 translate-middle" />
          <ProvaCounter />
        </Card.Body>
      </Card>
    </>
  );
};

export default Jumbotron;
