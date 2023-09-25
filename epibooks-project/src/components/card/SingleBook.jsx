import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import CommentsModal from "../comments/CommentsModal";
import { Link } from "react-router-dom";

const SingleBook = ({ url, title, price, asin, category }) => {
  const [selected, setSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Funzione per gestire il clic sulla carta e cambiare lo stato
  const handleCardClick = () => {
    setSelected(!selected);
    setShowModal(true);
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "600px",
          border: selected ? "4px solid red" : "none",
        }}
        onClick={handleCardClick}
      >
        <Card.Header
          style={{ position: "relative", overflow: "hidden", height: "100%" }}
        >
          <Card.Img
            variant="top"
            src={url}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              width: "auto",
              height: "auto",
              margin: "auto",
            }}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>{category}</ListGroup.Item>
            <ListGroup.Item>{price}$</ListGroup.Item>
            <ListGroup.Item>{asin}</ListGroup.Item>
          </ListGroup>
          {/* <Button variant="primary">Commenti</Button> */}
          <CommentsModal asin={asin} />
          <Link
            to={`/book/${asin}`}
            style={{ marginLeft: "1.5rem", textDecoration: "none" }}
          >
            <Button variant="info">Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
