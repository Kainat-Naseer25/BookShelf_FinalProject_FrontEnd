import React, { useState } from "react";
import addbtn from "./button.png";
import DataForm from "../Form/form";
import BooksCard from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";

const PrivateLibrary = (props) => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state) => ({
    addModal: state.appReducer.addModal
  }));
    const [showModal, setShowModal] = useState(false);
    const addBook = () => {
      dispatch({ type: "ADD-MODAL", payload: !addModal });
    }
  return (
    <div>
        <p>Currently No Books in Private Library</p>
        <img className="customCursor"
          alt="logo"
          src={addbtn}
          style={{
            height: 60,
            width: 60,
          }}
          onClick={addBook}
        />
        {addModal && <DataForm show={showModal}/>}
        <BooksCard />
    </div>
  );
};

export default PrivateLibrary;