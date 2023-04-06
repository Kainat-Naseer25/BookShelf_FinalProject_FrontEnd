import React from "react";
import MainNavBar from "./NavBars/MainNavBar";
import TabBar from "./NavBars/TabBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { logIn } = useSelector((state) => ({
    logIn: state.appReducer.logIn
  }));
  return (
    <>
    
      <MainNavBar />
      {logIn && <TabBar />}
    </>
  );
};

export default Dashboard;
