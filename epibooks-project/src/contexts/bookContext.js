import React, { createContext, useEffect, useState } from "react";
import fantasy from "../data/fantasy.json";

export const BookProvider = createContext();

const BookContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState({
    research: "",
    filtered: [],
    errors: {
      error: "",
    },
  });

  const [comments, setComments] = useState([]);

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExYTk5OGIyYjJhZTAwMTRiMzQ2ZjYiLCJpYXQiOjE2OTU2NTYzNDUsImV4cCI6MTY5Njg2NTk0NX0.BDTfLtWC6nJAvhAj9Jo-AO5HJEIkR68Pwdvg_btOu60";

  const getCommentsFromAPI = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setComments(data);
        console.log(comments);
      } else {
        console.error("Errore nella richiesta GET dei commenti");
      }
    } catch (error) {
      console.error("Errore nella richiesta GET", error);
    }
  };

  useEffect(() => {
    // getBooksFromAPI();
    setBooks(fantasy);
    console.log(books);
    getCommentsFromAPI();
  }, []);

  return (
    <>
      <BookProvider.Provider
        value={{
          books,
          setBooks,
          isLoading,
          setIsLoading,
          error,
          setError,
          filteredBooks,
          setFilteredBooks,
          comments,
          setComments,
        }}
      >
        {children}
      </BookProvider.Provider>
    </>
  );
};

export default BookContext;

//   const getBooksFromAPI = async () => {
//     try {
//       setIsLoading({ isLoading: true });
//       const res = await fetch("https://epibooks.onrender.com/");
//       const data = await res.json();
//       setBooks({ books: data });
//       setIsLoading({ isLoading: false });
//     } catch (error) {
//       console.error(error);
//       setError({ error: error });
//     }
//   };

//   const getBooks = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch("../data/fantasy.json");

//       if (!response.ok) {
//         throw new Error(`Errore nella richiesta del file: ${response.status}`);
//       }

//       const contentType = response.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new Error("La risposta non è un JSON valido.");
//       }

//       const data = await response.json();
//       console.log(data);
//       setBooks(data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//       setError(error);
//     }
//   };
