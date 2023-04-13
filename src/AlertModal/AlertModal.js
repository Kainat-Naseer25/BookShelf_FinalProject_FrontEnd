import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function AlertModal() {
  const dispatch = useDispatch();
  const { alert, msg } = useSelector((state) => ({
    alert: state.appReducer.alert,
    msg: state.appReducer.msg,
  }));

  const handleCloseModal = () => {
    dispatch({ type: "ALERT", payload: { alert: false, msg: "" } });
  };

  return (
    <>
      <Modal show={alert} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Alert!</Modal.Title>
        </Modal.Header>
        {msg === "error" ? (<Modal.Body> There is an error! </Modal.Body>):
        msg === "loading" ? (<Modal.Body> Loading Data... </Modal.Body>) : 
        (<Modal.Body> Nothing</Modal.Body>) }
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
