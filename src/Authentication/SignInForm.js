import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Page.css";
import { Alert } from "react-bootstrap";

function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginError } = useSelector((state) => ({
    loginError: state.appReducer.loginError,
  }));

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/users/login", {
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
      <form className="formFields" onSubmit={handleSubmit}>
        <div activeclassname="formTitleLink-active" className="formTitleLink">
          Sign In
        </div>{" "}
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
        {loginError && (
          <Alert color="danger">There is a problem in Login! Check credentials.</Alert>
        )}
        <div className="formField">
          <button className="formFieldButton">Sign In</button>{" "}
          <Link to="/auth/signup" className="formFieldLink">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
