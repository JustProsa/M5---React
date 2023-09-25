import React, { useState, useContext, useEffect } from "react";
import { BookProvider } from "../../contexts/bookContext";
import SingleBook from "../card/SingleBook";
import { nanoid } from "nanoid";
import { Col, Row, Container, Spinner } from "react-bootstrap";

const LatestRelease = () => {
  const {
    books,
    setBooks,
    isLoading,
    setIsLoading,
    error,
    setError,
    filteredBooks,
    setFilteredBooks,
  } = useContext(BookProvider);

  useEffect(() => {
    console.log(books);
    console.log(filtered);

    return () => {};
  }, []);

  //   console.log(books);
  // console.log(filtered);
  const { filtered } = filteredBooks;
  return (
    <>
      <Row style={{ margin: "0 1rem" }}>
        {isLoading && (
          <Spinner
            animation="border"
            role="status"
            style={{ margin: "auto auto" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {(filtered.length > 0 ? filtered : books).map((book) => (
          <Col key={nanoid()} xs={12} sm={6} md={4} lg={3} className="p-2">
            <SingleBook
              key={nanoid()}
              asin={book.asin}
              id={book.asin}
              url={book.img}
              title={book.title}
              price={book.price}
              category={book.category}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default LatestRelease;
