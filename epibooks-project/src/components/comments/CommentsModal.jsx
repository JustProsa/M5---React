import React, { useContext, useState, useEffect } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { BookProvider } from "../../contexts/bookContext";
import SingleComment from "../singleComment/SingleComment";
import { nanoid } from "nanoid";
import AddComment from "../addComment/AddComment";

const CommentsModal = ({ asin }) => {
  const { comments, setComments, isLoading } = useContext(BookProvider);
  const [lgShow, setLgShow] = useState(false);

  const filteredComments = comments.filter(
    (comment) => comment.elementId === asin
  );

  const handleOpenComments = () => {
    setLgShow(true);
    console.log(filteredComments);
    console.log({ asin });
  };
  return (
    <>
      <Button onClick={handleOpenComments}>Commenti</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Cosa ne pensano i lettori
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddComment
            style={{ width: "100%", marginBottom: "1rem" }}
            asin={asin}
          />
          {isLoading && (
            <Spinner
              animation="border"
              role="status"
              style={{ margin: "auto auto" }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}

          {filteredComments.map((comment) => (
            <SingleComment
              author={comment.author}
              rate={comment.rate}
              comment={comment.comment}
              commentID={comment._id}
              key={nanoid()}
            />
          ))}
          {/* <SingleComment /> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentsModal;
