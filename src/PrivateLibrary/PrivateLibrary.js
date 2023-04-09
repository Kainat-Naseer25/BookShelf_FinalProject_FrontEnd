import React, { useState } from "react";
import addbtn from "./button.png";
import DataForm from "../Form/form";
import BooksCard from "../Card/Card";
import "../App.css";
import BooksCard from "../Card/Card";

const PrivateLibrary = (props) => {
    const [showModal, setShowModal] = useState(false);
    const addBook = () => {
        setShowModal(true)
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
        {showModal && <DataForm show={showModal}/>}
        <BooksCard />
    </div>
  );
};

export default PrivateLibrary;