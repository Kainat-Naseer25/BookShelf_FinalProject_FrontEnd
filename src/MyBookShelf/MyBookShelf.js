import React, { useEffect, useState } from "react";
import BooksCard from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import "../App.css";
import "../Card/Card.css";
import { CardGroup, Row } from "reactstrap";
import ViewDescription from "../ViewDescription/ViewDescription";
import { Alert, Spinner } from "react-bootstrap";

const MyBookShelf = () => {
  const dispatch = useDispatch();
  const { user, descriptionModal, cdata } = useSelector((state) => ({
    user: state.appReducer.user,
    descriptionModal: state.appReducer.descriptionModal,
    cdata: state.appReducer.cdata,
  }));

  useEffect(() => {
    dispatch({ type: "TYPE", payload: "bookshelf" });
  }, []);

  const { isLoading, data, isError } = useQuery("mybookshelfData", () =>
    fetch(`http://localhost:8000/crud/books/bookshelf/read/${user._id}`).then(
      (res) => res.json()
    )
  );

  return (
    <div>
      {isLoading && (
        <div className="d-flex align-items-center justify-content-center">
          <Spinner animation="border" />
        </div>
      )}

      {isError && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            style={{
              width: "220px",
              height: "50px",
              background: "linear-gradient(to right, #36b8f0, #e95897)",
              color: "white",
            }}
          >
            <p>
              <b>Error:</b> An error occurred
            </p>
          </Alert>
        </div>
      )}

      <div className="dashboard">
        {data && data.length === 0 && <p>Currently No Books in My BookShelf</p>}
        <CardGroup>
          <Row className="mainRow">
            {data &&
              data.map((key, index) => (
                <BooksCard
                  className="column mb-5"
                  key={index}
                  item={key}
                  data={data}
                />
              ))}
            {descriptionModal && <ViewDescription data={cdata} />}
          </Row>
        </CardGroup>
      </div>
    </div>
  );
};

export default MyBookShelf;
