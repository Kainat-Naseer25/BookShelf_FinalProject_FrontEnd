import React from "react";
import MainNavBar from "./NavBars/MainNavBar";
import TabBar from "./NavBars/TabBar";
import { useSelector } from "react-redux";
import BooksCard from "./Card/Card";

const Dashboard = () => {
  const { logIn } = useSelector((state) => ({
    logIn: state.appReducer.logIn,
  }));
  return (
    <>
      <MainNavBar />
      {logIn && <TabBar />}
      <BooksCard />
    </>
  );
};

export default Dashboard;
