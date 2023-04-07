import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import library from "./library.jpg";

const Authentication = () => {
  const [activeLink, setActiveLink] = useState("auth/signup");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
      <div className="App">
        <div className="appAside">
          <img
            src={library}
            alt="Picture not showing"
            style={{
              width: "100%",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          />
        </div>
        <div className="appForm">
          <div className="pageSwitcher">
            <NavLink
              to="signin"
              activeclassname="pageSwitcherItem-active"
              className="pageSwitcherItem"
              onClick={() => handleLinkClick("auth/signin")}
            >
              Sign In
            </NavLink>
            <NavLink
              to="signup"
              activeclassname="pageSwitcherItem-active"
              className="pageSwitcherItem"
              onClick={() => handleLinkClick("auth/signup")}
            >
              Sign Up
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
  );
};

export default Authentication;
