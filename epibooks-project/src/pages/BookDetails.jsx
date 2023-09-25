import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import fantasy from "../data/fantasy.json";

const BookDetails = () => {
  const { bookID } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  const getBookByID = async () => {
    try {
      const response = await fetch(`https://epibooks.onrender.com/${bookID}`);
      const data = await response.json();
      setBookDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookByID();

    return () => {};
  }, [bookID]);

  return (
    <>
      <MainLayout>
        {bookDetails && (
          <div>
            <div>BOOK DETAILS del libro {bookID}</div>
            <img src={bookDetails[0].img} style={{ maxWidth: "500px" }} />
            <div>{bookDetails[0].title}</div>
            <div>{bookDetails[0].category}</div>
            <div>{bookDetails[0].price}</div>
            <Link to={"/"}>
              <button>Torna alla Home</button>
            </Link>
          </div>
        )}
      </MainLayout>
    </>
  );
};

export default BookDetails;
