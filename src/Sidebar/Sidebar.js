import React, { useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Sidebar.css";
import SearchBar from "../Search/Search";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleMenuItemClick = (menu) => {
    dispatch({ type: "MENU", payload: menu });
  };

  const [scrolled, setScrolled] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(searched) {
    setSearchResults(searched);
    dispatch({ type: "MENU", payload: "Search" });
    dispatch({ type: "SEARCH", payload: searchResults });
    console.log("SEARCH", searchResults);
  }

  function handleSearch(searched) {
    dispatch({ type: "SEARCH", payload: {menu: "Search" , search: searched }});
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="Linear-gradient(to bottom, #36b8f0, #e95897)"
        style={{ position: "fixed", top: "90px" }}
        width="100%"
      >
        <div style={{ padding: "20px" }}>
          <SearchBar onSearch={handleSearch}/>
        </div>
        <CDBSidebarHeader
          style={{ height: "70px", marginTop: "-20px" }}
          prefix={<i className="fa fa-bars fa-large"></i>}
        >
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Category
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent style={{ marginTop: "-50px" }}>
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("All")}
            >
              <CDBSidebarMenuItem icon="th">All</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Biography")}
            >
              <CDBSidebarMenuItem icon="user-alt">Biography</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Children")}
            >
              <CDBSidebarMenuItem icon="child">Children</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Computing")}
            >
              <CDBSidebarMenuItem icon="desktop">Computing</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeClassName="activeClicked"
              onClick={() => handleMenuItemClick("Entertainment")}
            >
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
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
