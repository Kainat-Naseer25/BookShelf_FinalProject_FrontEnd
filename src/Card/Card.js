import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import lock from "./lock.png";
import unlock from "./unlock.png";
import edit from "./edit.png";
import deleted from "./delete.png";
import addicon from "./addicon.png";
import { useState } from "react";
import "./Card.css";
import {
  Row,
  Col,
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import ViewDescription from "../ViewDescription/ViewDescription";
import DataForm from '../Form/form';

function BooksCard() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [cardData, setCardData] = useState("");
  const [editFormData, setEditFormData] = useState({});
  
  
  const viewDiscription = (item) => {
    setShowModal(true);
    setCardData(item);
  };
  
  const { user } = useSelector((state) => ({
    user: state.appReducer.user,
  }));

  const queryClient = useQueryClient();

  //for fetching books
  const { isLoading, error, data } = useQuery("myData", () =>
    fetch(`http://localhost:8000/crud/books/private/read/${user._id}`).then((res) => res.json())
  );

  //for deleting books
  const deleteBook = useMutation(
    async (id) => {
      const res = await fetch(`http://localhost:8000/crud/books/delete/${id}`, {
        method: 'DELETE'
      });
      return res.json();
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('myData');
      }
    }
  );
   // Edit User Book
   const handleEditBook = (item) => {
    setShowEditModal(true);
    setEditFormData(item);
  };
  const handleDeleteBook = (id) => {
    deleteBook.mutate(id);
  }; 

  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;
  return (
    <CardGroup className="page">
      <Row className="mainRow">
      {showModal && <ViewDescription show={showModal} data={cardData} />}
      {showEditModal && <DataForm show={showEditModal} data={editFormData} />}
        {data.map((item) => (
          <Col className="column mb-5" key={item.id} item={item}>
            <Card className="card mt-5">
              {item.visibility === "public" ? (
                <img src={unlock} alt="Your Image" className="card-image" title="public" />
              ) : item.visibility === "private" ? (
                <img src={lock} alt="Your Image" className="card-image" title="private" />
              ) : (
                <p>Invalid visibility value.</p>
              )}
              <CardImg
                className="image"
                alt="Card image cap"
                src={item.CoverImage}
                top
              />
              <img
                src={addicon}
                alt="Your Image"
                className="card-image1"
                title="Add to My BookShelf"
              />
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
                  <div className="pb-2">
                    <img src={edit} alt="Your Image" className="ed" onClick={() => handleEditBook(item)} />{" "}
                    <span> Edit </span>
                    <span className="px-3"> |</span>
                    <img src={deleted} alt="Your Image" className="de" onClick={() => handleDeleteBook(item._id)} />{" "}
                    <span> Delete </span>
                  </div>
                  <div>
                    <Button className="gradient-btn" onClick={() => viewDiscription(item)}>
                      View Description
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardGroup>
  );
}

export default BooksCard;
