import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Page.css";
import { Alert } from "react-bootstrap";

function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginError } = useSelector((state) => ({
    loginError: state.appReducer.loginError,
  }));
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/users/signup", {
      method: "POST",
      credentials: "include",

      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('logindata', JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data.user });
        dispatch({ type: "LOGIN-ERROR" });
        console.log("sign up done");
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN-ERROR" });
        console.log(error);
      });

    console.log("The form was submitted with the following data:");
    console.log(formData);
  };

  return (
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields">
        <div activeclassname="formTitleLink-active" className="formTitleLink">
          Sign Up
        </div>{" "}
        <div className="formField">
          <label className="formFieldLabel" htmlFor="fullname">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            className="formFieldInput"
            placeholder="Enter your full name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {loginError && (
          <Alert color="danger">
            There is a problem in SignUp! Check credentials.
          </Alert>
        )}
        <div className="formField">
          <button className="formFieldButton">Sign Up</button>{" "}
          <Link to="/auth/signin" className="formFieldLink">
            I'm already member
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
