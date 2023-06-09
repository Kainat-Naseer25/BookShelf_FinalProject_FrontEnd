import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import "../App.css";
import logo from "./bookshelf.png";
import login from "./login.png";
import Form from "react-bootstrap/Form";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

function MainNavBar() {
  const { logIn, user } = useSelector((state) => ({
    logIn: state.appReducer.logIn,
    user: state.appReducer.user,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToLogin = () => {
    navigate("/auth/signin");
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  const Logout = () => {
    fetch("http://localhost:8000/users/logout", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.removeItem('logindata');
        dispatch({ type: "LOGOUT" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar className="navbar">
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={logo}
          style={{
            height: 60,
            width: 60,
          }}
        />
        <NavbarText className="navtext"> BOOK SHELF </NavbarText>
      </NavbarBrand>

      <NavbarText className="customCursor">
        {logIn && <NavbarText> Welcome {user.fullname}! </NavbarText>}{" "}
        <img
          alt=""
          src={login}
          style={{
            height: 60,
            width: 60,
          }}
          onClick={navigateToLogin}
        />{" "}
        {!logIn && (
          <NavbarText className="navtext" onClick={navigateToLogin}>
            {" "}
            Login{" "}
          </NavbarText>
        )}
        {logIn && (
          <NavbarText className="navtext" onClick={Logout}>
            {" "}
            Logout{" "}
          </NavbarText>
        )}
      </NavbarText>
    </Navbar>
  );
}
export default MainNavBar;
