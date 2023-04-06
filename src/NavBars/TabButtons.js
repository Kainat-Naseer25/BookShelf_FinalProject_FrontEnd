import React from "react";
import "./NavBar.css";

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={button === activeTab ? "border-gradient border-gradient-purple" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default TabButtons;
