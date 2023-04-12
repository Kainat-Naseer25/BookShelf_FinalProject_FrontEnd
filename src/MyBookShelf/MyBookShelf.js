import React, { useEffect, useState } from "react";
import BooksCard from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import "../App.css";
import "../Card/Card.css";
import { CardGroup, Row } from "reactstrap";
import ViewDescription from "../ViewDescription/ViewDescription";

const MyBookShelf = (props) => {
  const dispatch = useDispatch();
  const { user, descriptionModal, cdata } = useSelector((state) => ({
    user: state.appReducer.user,
    descriptionModal: state.appReducer.descriptionModal,
    cdata: state.appReducer.cdata,
  }));

  useEffect(() => {
    dispatch({type: "TYPE", payload: "bookshelf"});
  },[]);

  const { isLoading, error, data } = useQuery("myData", () =>
    fetch(`http://localhost:8000/crud/books/bookshelf/read/${user._id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div className="dashboard">
      {data && data.length === 0 && <p>Currently No Books in My BookShelf</p>}
      <CardGroup>
        <Row className="mainRow">
          {data && data.map((key, index) => (
            <BooksCard
              className="column mb-5"
              key={index}
              item={key}
              data={data}
            />
          ))}
          ;{descriptionModal && <ViewDescription data={cdata} />}
        </Row>
      </CardGroup>
    </div>
  );
};

export default MyBookShelf;
