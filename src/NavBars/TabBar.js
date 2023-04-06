import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Tabs from "./Tabs"
import Tab from "./Tab";
import PrivateLibrary from "../PrivateLibrary/PrivateLibrary";

function TabBar() {
  return (
    <div className="tabs">
      <Tabs>
        <Tab label="Public Library">
          <div>
            <p>Public Library</p>
          </div>
        </Tab>
        <Tab label="Book Shelf">
          <div>
            <p>Book Shelf</p>
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