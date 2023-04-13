import React, { useEffect, useState } from "react";
import addbtn from "./button.png";
import DataForm from "../Form/form";
import BooksCard from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import "../App.css";
import "../Card/Card.css";
import { CardGroup, Row } from "reactstrap";
import ViewDescription from "../ViewDescription/ViewDescription";
import { Alert, Spinner } from "react-bootstrap";

const PrivateLibrary = (props) => {
  const dispatch = useDispatch();
  const { addModal, user, descriptionModal, cdata } = useSelector((state) => ({
    addModal: state.appReducer.addModal,
    user: state.appReducer.user,
    descriptionModal: state.appReducer.descriptionModal,
    cdata: state.appReducer.cdata,
  }));

  useEffect(() => {
    dispatch({ type: "TYPE", payload: "private" });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const addBook = () => {
    dispatch({ type: "ADD-MODAL", payload: !addModal });
  };

  const { isLoading, data, isError } = useQuery("myData", () =>
    fetch(`http://localhost:8000/crud/books/private/read/${user._id}`).then(
      (res) => res.json()
    )
  );

  return (
    <div>
      <span className="customCursor" onClick={addBook}>
        <p className="addbooks"> Click to Add Books </p>
        <img
          className="customCursor"
          alt="logo"
          src={addbtn}
          style={{
            height: 60,
            width: 60,
          }}
        />
      </span>
      {addModal && <DataForm show={showModal} />}
      {isLoading && (
        <div className="m-5 d-flex align-items-center justify-content-center">
          <Spinner animation="border" />
        </div>
      )}

      {isError && (
        <div className="m-5"
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
      {data && data.length === 0 && (
        <p className="m-5"> Currently No Books in Private Library</p>
      )}
      {data && data.length !== 0 && (
        <CardGroup>
          <Row className="mainRow">
            {data.map((key, index) => (
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
      )}
    </div>
  );
};

export default PrivateLibrary;
