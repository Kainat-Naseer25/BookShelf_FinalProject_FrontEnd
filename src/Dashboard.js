import React, { useEffect } from "react";
import MainNavBar from "./NavBars/MainNavBar";
import TabBar from "./NavBars/TabBar";
import { useSelector, useDispatch } from "react-redux";
import PublicLibrary from "./PublicLibrary/PublicLibrary";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import { Col, Row } from "reactstrap";
import BookFooter from "./Footer/BookFooter";

const Dashboard = () => {
  const { logIn, menu } = useSelector((state) => ({
    logIn: state.appReducer.logIn,
    menu: state.appReducer.menu,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const myValue = JSON.parse(localStorage.getItem("logindata"));

    if (myValue) {
      dispatch({ type: "LOGIN", payload: myValue.user });
    }
  }, [logIn]);

  return (
    <div className="bg">
      <MainNavBar />
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col md="10">
          {logIn ? <TabBar /> : <div style={{ marginTop: "150px" }}>
            {menu && <PublicLibrary />}
          </div>}
          <BookFooter />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
