import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useMutation } from "react-query";
import axios from "axios";
import "./form.css";
import { useSelector } from "react-redux";

const DataForm = (props) => {
  const data = props.data;
  console.log(data)
  const [modal, setModal] = useState(true);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState("");
  const [ISBN, setISBN] = useState("");
  const [category, setCategory] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [image, setImage] = useState(null);
  const [access, setAccess] = useState("");

  const { user } = useSelector((state) => ({
    user: state.appReducer.user,
  }));
  const [addedBy, setaddedBy] = useState(user._id);


  const mutation = useMutation((body) => {
    return axios.post("http://localhost:8000/crud/books/create", {
      BookName: body.book,
      Author: body.author,
      Rating: body.rating,
      Price: body.price,
      ISBN: body.ISBN,
      visibility: body.access,
      Category: body.category,
      AddedBy: body.addedBy,
    });
  });

  const toggle = () => setModal(!modal);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user._id);
    // Do something with the form data, e.g. send it to the server
    mutation.mutate({
      book,
      author,
      rating,
      price,
      ISBN,
      category,
      image,
      access,
      addedBy
    });
  };
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "Other") {
      setVisibility(true);
    } else {
      setVisibility(false);
      setCategory(value);
    }
  };
  const handleVisibilityChange = () => {
    setIsPublic(!isPublic);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  function onChangeValue(event) {
    setAccess(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="addmodalHead">
          Add New Book
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="addform-group">
              <label htmlFor="bookName">Book Name:</label>
              <input
                type="text"
                name="bookName"
                value={data ? data.BookName : book}
                className="addform-control"
                onChange={(e) => setBook(e.target.value)}
                required
              />
            </div>
            <div className="addform-group">
              <label htmlFor="authorName">Author Name:</label>
              <input
                type="text"
                name="authorName"
                value={data ? data.Author : author}
                className="addform-control"
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className="addform-group">
              <label htmlFor="rating">Rating:</label>
              <input
                type="text"
                name="rating"
                value={data ? data.Rating : rating}
                className="addform-control"
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <div className="addform-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                value={data ? data.Price : price}
                className="addform-control"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="addform-group">
              <label htmlFor="ISBN">ISBN:</label>
              <input
                type="text"
                name="ISBN"
                value={data ? data.ISBN : ISBN}
                className="addform-control"
                onChange={(e) => setISBN(e.target.value)}
                required
              />
            </div>

            <div className="addform-group" onChange={onChangeValue}>
              <label htmlFor="visibility">Type:</label>
              <div className="addform-check addform-check-inline radio">
                <input
                  type="radio"
                  value="public"
                  name="access"
                  //value={data ? data.visibility : ""}
                  className="form-check-input"
                  checked={data && data.visibility === "public"}
                  required
                />
                <label htmlFor="public" className="addform-check-label">
                  Public
                </label>
                <input
                  type="radio"
                  value="private"
                  name="access"
                  //value={data ? data.visibility : ""}
                  checked={data && data.visibility === "private"}
                  required
                />
                <label htmlFor="public" className="addform-check-label">
                  Private
                </label>
              </div>
              {/* <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="visibility"
                  className="form-check-input"
                  value="private"
                  checked={!isPublic}
                  onChange={handleVisibilityChange}
                />
                <label htmlFor="private" className="form-check-label">
                  Private
                </label>
              </div> */}
            </div>
            <div className="addform-group">
              <label htmlFor="category">Category:</label>
              <div className="d-flex">
                <select
                  name="category"
                  className="addform-control mr-2"
                  //value={category}
                  value={data && data.Category ? data.Category : category}
                  onChange={handleCategoryChange}
                >
                  <option value="">--Select--</option>
                  <option value="Medical">Medical</option>
                  <option value="Biography">Biography</option>
                  <option value="Computing">Computing</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Humor">Humor</option>
                  <option value="Religion">Religion</option>
                  <option value="Sports">Sports</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Other">Other</option>
                  required
                </select>
                {visibility && (
                  <input
                    type="text"
                    name="customCategory"
                    className="addform-control"
                    placeholder="Enter custom category"
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                )}
              </div>
            </div>
            <div className="addform-group">
              <label htmlFor="coverImage">Cover Image:</label>
              <input
                type="file"
                name="coverImage"
                accept=".jpg,.png,.jpeg"
                className="addform-control-file"
                onChange={handleFileUpload}
              />
            </div>

            <ModalFooter className="addmodal-footer">
              <button
                type="submit"
                className="addbtn addbtn-secondary, addformFieldButton"
                onClick={toggle}
              >
                Submit
              </button>
              {/* <button
                className="addbtn addbtn-secondary, addformFieldButton"
                onClick={toggle}
              >
                Close
              </button> */}
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DataForm;
