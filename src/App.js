import React from 'react';
import { useState } from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import SignUpForm from "./Pages/SignUpForm";
import SignInForm from "./Pages/SignInForm";
import library from "./Pages/library.jpg";
// import DataForm from "./Form/Form.js";
// import UserCard from "./Cards/Bookcard.js";

import "./App.css";

function App() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    // <div>
    //   <DataForm />
    //   <UserCard />
    // </div>
    <BrowserRouter>
      <div className="App">
        <div className="appAside">
        <img src={library} alt='Picture not showing' style={{ width: "100%", borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px"}}/>
        </div>
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="/sign-in"
              activeclassname="pageSwitcherItem-active"
              className="pageSwitcherItem"
              onClick={() => handleLinkClick("/sign-in")}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/"
              activeclassname="pageSwitcherItem-active"
              className="pageSwitcherItem"
              onClick={() => handleLinkClick("/")}
            >
              Sign Up
            </NavLink>
          </div>

          <Routes>
          <Route exact path="/" element={<SignUpForm/>} />
          <Route path="/sign-in" element={<SignInForm/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
