import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Form } from 'react-bootstrap';
import PublicLibrary from "../PublicLibrary/PublicLibrary";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css"

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleMenuItemClick = (menu) => {
    dispatch({ type: "MENU", payload: menu });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  return (
    <div>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="Linear-gradient(to bottom, #36b8f0, #e95897)"
        style={{ position: 'fixed', top: '90px' }} >
        <div style={{ padding: "20px" }}>
          <Form.Group>
            <Form.Control type="text" placeholder="Search book here..." />
          </Form.Group>
        </div>
        <CDBSidebarHeader style={{ height: '70px', marginTop: '-20px' }}
          prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Category
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent style={{ height: 'calc(100vh - 56px)', marginTop: '-50px' }}
        >
          <CDBSidebarMenu >
            <NavLink exact to="/" activeClassName="activeClicked" onClick={() => handleMenuItemClick("All")}>
              <CDBSidebarMenuItem icon="th">All</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked" onClick={() => handleMenuItemClick("Biography")}>
              <CDBSidebarMenuItem icon="user-alt">Biography</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked" onClick={() => handleMenuItemClick("Children")}>
              <CDBSidebarMenuItem icon="child">Children</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked" onClick={() => handleMenuItemClick("Computing")}>
              <CDBSidebarMenuItem icon="desktop">Computing</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked" onClick={() => handleMenuItemClick("Entertainment")}>
              <CDBSidebarMenuItem icon="music">
                Entertainment
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Humor")}
            >
              <CDBSidebarMenuItem icon="laugh">Humor</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Medical")}
            >
              <CDBSidebarMenuItem icon="medkit">Medical</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Poetry")}
            >
              <CDBSidebarMenuItem icon="feather-alt">Poetry</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Religion")}
            >
              <CDBSidebarMenuItem icon="pray">Religion</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Sports")}
            >
              <CDBSidebarMenuItem icon="gamepad">Sports</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Others")}
            >
              <CDBSidebarMenuItem icon="ellipsis-h">Others</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;