import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import PublicLibrary from "../PublicLibrary/PublicLibrary";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleMenuItemClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="Linear-gradient(to bottom, #36b8f0, #e95897)"
        fixed
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Category
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("All")}
            >
              <CDBSidebarMenuItem icon="user-alt">All</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("menu1")}
            >
              <CDBSidebarMenuItem icon="user-alt">Biography</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("menu2")}
            >
              <CDBSidebarMenuItem icon="child">Children</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/profile"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("menu3")}
            >
              <CDBSidebarMenuItem icon="desktop">Computing</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/analytics"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("menu4")}
            >
              <CDBSidebarMenuItem icon="music">
                Entertainment
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
      {selectedMenu !== "" && <PublicLibrary />}
    </div>
  );
};

export default Sidebar;