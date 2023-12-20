import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Friends from "./Friends";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <Friends />
    </div>
  );
};

export default Sidebar;
