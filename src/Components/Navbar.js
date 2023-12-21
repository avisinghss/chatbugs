import React from "react";
import { signOut } from "firebase/auth";
import myimg from "../image/profile.jpg";
import { auth } from "../firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">
        ChatBugs <i className="fa-solid fa-bug"></i>
      </span>
      <div className="user">
        <img src={myimg} alt="user" className="img" />
        <span>Anubhav</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
