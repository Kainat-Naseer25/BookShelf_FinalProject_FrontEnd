import React, { useEffect } from "react";
import MainNavBar from "./NavBars/MainNavBar";
import TabBar from "./NavBars/TabBar";
import { useSelector, useDispatch } from "react-redux";
import PublicLibrary from "./PublicLibrary/PublicLibrary";
import "./App.css";

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
      {logIn ? <TabBar /> : <div className="dashboard"> <PublicLibrary /> </div>}
    </div>
  );
};

export default Dashboard;
