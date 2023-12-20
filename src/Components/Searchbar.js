import React from "react";
import img from "../image/user2.jpg";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find your bugs" />
      </div>
      <div className="userChat">
        <img src={img} alt="user" />
        <div className="userChatInfo">
          <span>Kartikay</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
