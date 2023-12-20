import React from "react";
import myimg from "../image/profile.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        ChatBugs <i className="fa-solid fa-bug"></i>
      </span>
      <div className="user">
        <img src={myimg} alt="user" className="img" />
        <span>Anubhav</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
