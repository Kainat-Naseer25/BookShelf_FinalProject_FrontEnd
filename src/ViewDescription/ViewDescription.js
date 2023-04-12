import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal, Row, Col } from "reactstrap";
import viewBook from "./viewBook.jpeg";
import "./ViewDescription.css";
import { useSelector, useDispatch } from "react-redux";

function ViewDescription(props) {
  const dispatch = useDispatch();
  const { descriptionModal } = useSelector((state) => ({
    descriptionModal: state.appReducer.descriptionModal,
  }));
  console.log("DESCRIPTION PROP",props.data);
  const data = props.data;

  const toggle = () => dispatch({ type: "DESCRIPTION-MODAL", payload: false });

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div>
      <Modal
        isOpen={descriptionModal}
        toggle={toggle}
        external={externalCloseBtn}
        className="modal-lg"
      >
        <Row>
          <Col md="4" className="leftCol"></Col>
          <Col className="box overlay">
            <img
              alt="Book card image"
              src={data.CoverImage}
              top={true}
              height="80%"
              width="80%"
            />
          </Col>
          <Col className="rightCol">
            <div className="bookTitle">{data.BookName}</div>
            <div className="text">
              <b> ISBN:</b> {data.ISBN}
              <br />
              <b> Category:</b> {data.Category}
              <br />
              <b> Author:</b> {data.Author}
              <br />
              <b>Description:</b>
              The Forty Rules of Love is a novel written by the Turkish author
              Elif Shafak. Her interest in writing this book was influenced by
              the degree she received in Gender and Women’s Studies. The book
              was published in March 2009. It is about Maulana Jalal-Ud-Din,
              known as Rumi and his companion Shams Tabrizi.
            </div>
            <Button
              color="secondary"
              onClick={toggle}
              className="gradient-button"
            >
              Close
            </Button>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

export default ViewDescription;
