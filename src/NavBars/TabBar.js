import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Tabs from "./Tabs";
import Tab from "./Tab";
import PrivateLibrary from "../PrivateLibrary/PrivateLibrary";
import MyBookShelf from "../MyBookShelf/MyBookShelf";
import PublicLibrary from "../PublicLibrary/PublicLibrary";
import Sidebar from "../Sidebar/Sidebar";

function TabBar() {
  return (
    <div className="tabs">
      <Tabs>
        <Tab label="Public Library">
          <div>
            <PublicLibrary />
          </div>
        </Tab>
        <Tab label="Book Shelf">
          <div>
            <MyBookShelf />
          </div>
        </Tab>
        <Tab label="Private Library">
          <div>
            <PrivateLibrary />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
export default TabBar;
