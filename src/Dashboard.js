import React, { useEffect } from "react";
import MainNavBar from "./NavBars/MainNavBar";
import TabBar from "./NavBars/TabBar";
import { useSelector, useDispatch } from "react-redux";

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
    <>
      <MainNavBar />
      {logIn && <TabBar />}
      {/* <BooksCard /> */}
    </>
  );
};

export default Dashboard;
