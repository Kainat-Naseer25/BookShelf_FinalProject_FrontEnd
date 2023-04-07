import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Form.css";

const DataForm = (props) => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g. send it to the server
  };

  return (
    // <div>
    //   <Button color="primary" onClick={toggle}>
    //     Add New Book
    //   </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Book</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="bookName">Book Name:</label>
              <input type="text" name="bookName" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="authorName">Author Name:</label>
              <input type="text" name="authorName" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input type="number" name="rating" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="number" name="price" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="ISBN">ISBN:</label>
              <input type="text" name="ISBN" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input type="text" name="category" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="coverImage">Cover Image:</label>
              <input type="file" name="coverImage" accept="image/*" className="form-control" />
            </div>
            <ModalFooter>
              <button type="submit" className="btn btn-primary">Submit</button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    // </div>
  );
};

export default DataForm;
