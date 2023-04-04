import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./form.css";

const DataForm = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g. send it to the server
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add New Book
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Book</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="bookName">Book Name:</label>
              <input type="text" name="bookName" class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="authorName">Author Name:</label>
              <input type="text" name="authorName" class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input type="number" name="rating" class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="number" name="price" class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="ISBN">ISBN:</label>
              <input type="text" name="ISBN" class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input type="text" name="category" class="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="coverImage">Cover Image:</label>
              <input type="file" name="coverImage" accept="image/*" class="form-control" />
            </div>
            <ModalFooter>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary" onClick={toggle}>Close</button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DataForm;
