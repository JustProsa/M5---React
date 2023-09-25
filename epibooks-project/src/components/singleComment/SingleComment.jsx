import React, { useState, useEffect, useContext } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { BookProvider } from "../../contexts/bookContext";

const SingleComment = ({ comment, rate, author, commentID }) => {
  const { comments, setComments } = useContext(BookProvider);

  const findComment = () => {
    console.log({ commentID });
  };

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ZTZlZmRmZmI4YjAwMTQ0MTNjZGIiLCJpYXQiOjE2OTUyODM3MjYsImV4cCI6MTY5NjQ5MzMyNn0.f51Kd-HZEaBPPTmPZlpTWiAWhoMZvyukbAJvAdi7nDM";

  const deleteComment = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentID}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (response.ok) {
        const updatedComments = comments.filter(
          (comment) => comment._id !== commentID
        );
        setComments(updatedComments);
        console.log("Commento eliminato con successo!");
      } else {
        console.error(
          "Errore nella richiesta DELETE del commento:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {}
  };

  return (
    <>
      <Card className="mb-2" onClick={findComment}>
        <Card.Header className="d-flex justify-content-between align-middle">
          <p className="p-0 m-0">Comment</p>
          <ButtonGroup aria-label="Basic example">
            {/* <Button variant="warning">Edit</Button> */}
            <Button variant="danger" onClick={deleteComment}>
              Delete
            </Button>
          </ButtonGroup>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              {comment} <span>Rated: {rate}</span>
            </p>
            <footer className="blockquote-footer">
              Commented by <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleComment;
