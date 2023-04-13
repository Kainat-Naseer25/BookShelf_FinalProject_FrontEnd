import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useMutation } from "react-query";
import axios from "axios";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";

const DataForm = (props) => {
  const data = props.data;
  console.log(data);
  const [modal, setModal] = useState(true);
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(null);
  const [price, setPrice] = useState("");
  const [ISBN, setISBN] = useState("");
  const [category, setCategory] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [image, setImage] = useState(null);
  const [access, setAccess] = useState("");
  const dispatch = useDispatch();

  const { user, addModal, editModal, edata } = useSelector((state) => ({
    user: state.appReducer.user,
    addModal: state.appReducer.addModal,
    editModal: state.appReducer.editModal,
    edata: state.appReducer.edata
  }));
  const [addedBy, setaddedBy] = useState(user._id);

  useEffect(() => {
    if (data) {
      setBook(data.BookName);
      setAuthor(data.Author);
      setRating(data.Rating);
      setPrice(data.Price);
      setISBN(data.ISBN);
      setAccess(data.visibility);
      setCategory(data.Category);
      setImage(data.CoverImage);
    }
  }, [data]);

  const mutation = useMutation((body) => {
    console.log("mutation", addedBy);
    console.log(body);
    if (!data){
      return axios.post("http://localhost:8000/crud/books/create", {
        BookName: body.book,
        Author: body.author,
        Rating: body.rating,
        Price: body.price,
        ISBN: body.ISBN,
        visibility: body.access,
        Category: body.category,
        AddedBy: body.addedBy,
        CoverImage: body.image
      });
    }
    else{
      return axios.put(`http://localhost:8000/crud/books/update/${data._id}`, {
        BookName: body.book,
        Author: body.author,
        Rating: body.rating,
        Price: body.price,
        ISBN: body.ISBN,
        visibility: body.access,
        Category: body.category,
        AddedBy: body.addedBy,
        CoverImage: body.image
      });
    }
  });

  const toggle = () => {
    dispatch({ type: "ADD-MODAL", payload: false })
    dispatch({ type: "EDIT-MODAL", payload: { editModal: false, edata: "" } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD-MODAL", payload: false });
    dispatch({ type: "EDIT-MODAL", payload: { editModal: false, edata: "" } });
    console.log("handle submit", addedBy);
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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  function onChangeValue(event) {
    setAccess(event.target.value);
    console.log(event.target.value);
  }

  const modalStyles = {
    width: '500px',
    height: '300px',
  };

  return (
    <div>
      <Modal isOpen={addModal || editModal} toggle={toggle} className="modal-lg" style={modalStyles}>
        <ModalHeader toggle={toggle} className="addmodalHead">
          Add New Book
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="addform-group">
              <label htmlFor="bookName">Book Name:</label>
              <input
                type="text"
                name="bookName"
                value={book}
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
                value={author}
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
                value={rating}
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
                value={price}
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
                value={ISBN}
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
                  className="form-check-input"
                  checked={access === "public"}
                  onChange={onChangeValue}
                  required
                />
                <label htmlFor="public" className="addform-check-label">
                  Public
                </label>
                <input
                  type="radio"
                  value="private"
                  name="access"
                  checked={access === "private"}
                  onChange={onChangeValue}
                  required
                />
                <label htmlFor="public" className="addform-check-label">
                  Private
                </label>
              </div>
            </div>
            <div className="addform-group">
              <label htmlFor="category">Category:</label>
              <div className="d-flex">
                <select
                  name="category"
                  className="addform-control mr-2"
                  value={category}
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
                type="text"
                name="coverImage"
                className="addform-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            <ModalFooter className="addmodal-footer">
              <button
                type="submit"
                className="addbtn addbtn-secondary, addformFieldButton"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DataForm;
