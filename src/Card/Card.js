import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import lock from "./lock.png";
import unlock from "./unlock.png";
import edit from "./edit.png";
import deleted from "./delete.png";
import addicon from "./plus.png";
import remove from "./minus.png";
import "./Card.css";
import "../App.css";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { useMutation } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { QueryClient } from "react-query";

function BooksCard(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const queryClient = new QueryClient();

  const { descriptionModal, user, type } = useSelector((state) => ({
    descriptionModal: state.appReducer.descriptionModal,
    user: state.appReducer.user,
    type: state.appReducer.type,
  }));

  const viewDiscription = (item) => {
    dispatch({
      type: "DESCRIPTION-MODAL",
      payload: { show: !descriptionModal, cdata: item },
    });
  };

  const addBookToShelf = useMutation(
    async (bookId) =>
      fetch(`http://localhost:8000/crud/books/bookshelf/${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId: bookId }),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        console.log("Book added to shelf", data);
      },
    }
  );

  const addtoMyBookShelf = (bookId) => {
    console.log("ADDED TO BOOKSHELF", bookId, " USER ", user._id);
    addBookToShelf.mutate(bookId);
  };

  const removeBookFromShelf = useMutation(
    async (bookId) =>
      fetch(`http://localhost:8000/crud/books/bookshelf/remove/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId: bookId }),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("bookshelf");
        console.log("Book removed from shelf", data);
      },
    }
  );

  const removefromMyBookShelf = (bookId) => {
    removeBookFromShelf.mutate(bookId);
  };

  const deleteBook = useMutation(
    async (id) => {
      const res = await fetch(`http://localhost:8000/crud/books/delete/${id}`, {
        method: "DELETE",
      });
      return res.json();
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("myData");
      },
    }
  );

  const handleDeleteBook = (id) => {
    deleteBook.mutate(id);
  };

  return (
    <Col>
      <Card className="card mt-5">
        {item.visibility === "public" ? (
          <img
            src={unlock}
            alt="Your Image"
            className="card-image"
            title="public"
          />
        ) : item.visibility === "private" ? (
          <img
            src={lock}
            alt="Your Image"
            className="card-image"
            title="private"
          />
        ) : (
          <p>Invalid visibility value.</p>
        )}
        <CardImg
          className="image"
          alt="Card image cap"
          src={item.CoverImage}
          top={true}
        />
        {type === "bookshelf" ? (
          <img
            src={remove}
            alt="Your Image"
            className="card-image1 customCursor"
            title="Remove from My BookShelf"
            onClick={() => removefromMyBookShelf(item._id)}
          />
        ) : (
          <img
            src={addicon}
            alt="Your Image"
            className="card-image1 customCursor"
            title="Add to My BookShelf"
            onClick={() => addtoMyBookShelf(item._id)}
          />
        )}
        <CardBody>
          <CardTitle tag="h5">{item.BookName}</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            {item.Author}
          </CardSubtitle>
          <CardText>
            <label className="book-price-text poppins_bold">
              {" "}
              $ {item.Price}
            </label>
            <br />
            <label role="img" aria-label="star">
              ⭐ {item.Rating}{" "}
            </label>
          </CardText>
          <div className="bottom">
            {type === "private" && (
              <div className="pb-2">
                <span className="customCursor">
                  <img src={edit} alt="Your Image" className="ed" /> Edit{" "}
                </span>
                <span className="px-3"> |</span>
                <span
                  className="customCursor"
                  onClick={() => handleDeleteBook(item._id)}
                >
                  <img src={deleted} alt="Your Image" className="de" /> Delete{" "}
                </span>
              </div>
            )}
            <div>
              <Button
                id={item._id}
                className="gradient-btn"
                onClick={() => viewDiscription(item)}
                disabled={item.visibility === "private"}
              >
                View Description
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default BooksCard;
