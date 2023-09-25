import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { BookProvider } from "../../contexts/bookContext";

const AddComment = ({ asin }) => {
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExYTk5OGIyYjJhZTAwMTRiMzQ2ZjYiLCJpYXQiOjE2OTU2NTYzNDUsImV4cCI6MTY5Njg2NTk0NX0.BDTfLtWC6nJAvhAj9Jo-AO5HJEIkR68Pwdvg_btOu60";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [commentData, setCommentData] = useState({
    author: "",
    rate: "",
    comment: "",
    elementId: asin,
  });

  const { comments, setComments } = useContext(BookProvider);

  const handleCommentChange = (e) => {
    // console.log(commentData);
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
    console.log(name, value);
  };

  const provaProva = () => {
    console.log(commentData);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify(commentData),
        }
      );

      if (response.ok) {
        const newComment = await response.json();
        console.log(newComment);
        // Se la richiesta ha successo, aggiorna l'elenco dei commenti e reimposta lo stato di commentData
        console.log("Ci sei riuscito!", newComment);
        setComments([...comments, newComment]); // Aggiunge il nuovo commento alla lista esistente
        handleClose();

        // Reimposta lo stato commentData ai valori iniziali o vuoti
        setCommentData({
          author: "",
          rate: "",
          comment: "",
          elementId: { asin },
        });
      } else {
        console.error(
          "Errore nella richiesta POST del commento:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Si è verificato un problema nella chiamata POST", error);
    }
  };

  return (
    <>
      <Button
        variant="success"
        onClick={handleShow}
        style={{ width: "100%", marginBottom: "1rem" }}
      >
        ADD A COMMENT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="author"
                value={commentData.author}
                onChange={handleCommentChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose a rate (1-5)"
                name="rate"
                value={commentData.rate}
                onChange={handleCommentChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comment"
                value={commentData.comment}
                onChange={handleCommentChange}
                placeholder="Tell us what you think"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCommentSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddComment;
