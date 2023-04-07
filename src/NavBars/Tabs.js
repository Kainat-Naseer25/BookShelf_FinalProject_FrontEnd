import React from "react";
import TabButtons from "./TabButtons";
import { useState } from "react";
import "./NavBar.css";

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  
    const changeTab = (tab) => {
      setActiveTab(tab);
    };
  
    let content;
    let buttons = [];
  
    React.Children.map(props.children, (child) => {
      buttons.push(child.props.label);
      if (child.props.label === activeTab) content = child.props.children;
    });
  
    return (
      <div>
        <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
        <div className="tab-content">{content}</div>
      </div>
    );
  };

  export default Tabs;