import React, { useEffect } from "react";
import MainNavBar from "./NavBars/MainNavBar";
import TabBar from "./NavBars/TabBar";
import { useSelector, useDispatch } from "react-redux";
import PublicLibrary from "./PublicLibrary/PublicLibrary";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
  const { logIn } = useSelector((state) => ({
    logIn: state.appReducer.logIn,
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
        <Col md='3'>
          <Sidebar />
        </Col>
        <Col md='9'>
          {logIn ? <TabBar /> : <div style={{ marginTop: "150px" }}>
            <PublicLibrary />
          </div>}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
