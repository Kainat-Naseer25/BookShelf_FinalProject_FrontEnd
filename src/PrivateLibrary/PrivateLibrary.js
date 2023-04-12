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

const PrivateLibrary = (props) => {
  const dispatch = useDispatch();
  const { addModal, user, descriptionModal, cdata } = useSelector(
    (state) => ({
      addModal: state.appReducer.addModal,
      user: state.appReducer.user,
      descriptionModal: state.appReducer.descriptionModal,
      cdata: state.appReducer.cdata,
    })
  );

  useEffect(() => {
    dispatch({type: "TYPE", payload: "private"});
  },[]);
  const [showModal, setShowModal] = useState(false);
  const addBook = () => {
    dispatch({ type: "ADD-MODAL", payload: !addModal });
  };

  const { isLoading, error, data } = useQuery("myData", () =>
    fetch(`http://localhost:8000/crud/books/private/read/${user._id}`).then(
      (res) => res.json()
    )
  );
  if (isLoading) return "Loading...";

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      {data && data.length === 0 && <p>Currently No Books in Private Library</p>}
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
          ;{descriptionModal && <ViewDescription data={cdata} />}
        </Row>
      </CardGroup>
    </div>
  );
};

export default PrivateLibrary;
