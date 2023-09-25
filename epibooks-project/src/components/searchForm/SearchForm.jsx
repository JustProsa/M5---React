import React, { useContext, useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { BookProvider } from "../../contexts/bookContext";

const SearchForm = ({}) => {
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

  //   console.log(books);
  //   console.log(filteredBooks.research);
  //   console.log(setFilteredBooks);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilteredBooks({ ...filteredBooks, [name]: value });
    // const { research } = filteredBooks;
    // const filtered = books.filter((book) => {
    //   return book.title.toLowerCase().includes(research.toLowerCase());
    // });
    // setFilteredBooks({ ...filteredBooks, filtered });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { research } = filteredBooks;
    console.log(research);
    let filtered = books.filter((book) => {
      return book.title.toLowerCase().includes(research.toLowerCase());
    });
    console.log(books);
    console.log(filtered);
    setFilteredBooks({ ...filteredBooks, filtered });
    console.log(filteredBooks.filtered);
  };

  useEffect(() => {
    console.log(filteredBooks.filtered);

    return () => {};
  }, [filteredBooks.filtered]);

  return (
    <>
      <Form
        className="position-absolute top-50 start-50 translate-middle"
        onSubmit={handleSubmit}
      >
        <InputGroup className="mb-3">
          <Form.Control
            id="searchBooks"
            type="text"
            placeholder="Search your books"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            name="research"
            value={filteredBooks.research}
            onChange={handleInputChange}
            required
          />
          <InputGroup.Text id="basic-addon2">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Search
            </Button>
          </InputGroup.Text>
        </InputGroup>
      </Form>
    </>
  );
};

export default SearchForm;
