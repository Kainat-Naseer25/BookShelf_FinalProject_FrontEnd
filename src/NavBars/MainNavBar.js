import React from "react";
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
  const Logout = () => {
    fetch("http://localhost:8000/logout")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "LOGOUT" });
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
            height: 40,
            width: 40,
          }}
        />
        <NavbarText className="navtext"> Book Shelf </NavbarText>
      </NavbarBrand>
      <Form.Group>
        <Form.Control type="text" placeholder="Search..." />
      </Form.Group>
      <NavbarText className="customCursor">
        {logIn && <NavbarText> {user.fullname} </NavbarText>}{" "}
        <img
          alt=""
          src={login}
          style={{
            height: 40,
            width: 40,
          }}
          onClick={navigateToLogin}
        />{" "}
        {!logIn && <NavbarText onClick={navigateToLogin}> Login </NavbarText>}
        {logIn && <NavbarText onClick={Logout}> Logout </NavbarText>}
      </NavbarText>
    </Navbar>
  );
}
export default MainNavBar;