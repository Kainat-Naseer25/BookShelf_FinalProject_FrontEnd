import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import Tabs from "./Tabs";
import Tab from "./Tab";
import PrivateLibrary from "../PrivateLibrary/PrivateLibrary";
import MyBookShelf from "../MyBookShelf/MyBookShelf";
import PublicLibrary from "../PublicLibrary/PublicLibrary";
import { useSelector } from "react-redux";

function TabBar() {
  const { menu } = useSelector((state) => ({
    menu: state.appReducer.menu,
  }));

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
      <Tabs style={{ position: 'fixed', top: '100px' }} >
        <Tab label="Public Library">
          <div>
            <PublicLibrary menu={menu} />
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
