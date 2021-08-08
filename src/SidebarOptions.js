import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ active, Icon, title }) {
  return (
    <div className={`sidebarOptions ${active && "sidebarOptions__active"}`}>
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarOptions;
