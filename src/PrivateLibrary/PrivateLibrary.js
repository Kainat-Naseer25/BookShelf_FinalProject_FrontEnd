import React, { useState } from "react";
import addbtn from "./button.png";
import DataForm from "../Form/form";
import "../App.css";

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
    </div>
  );
};

export default PrivateLibrary;