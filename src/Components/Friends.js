import React from "react";
import img from "../image/user2.jpg";

const Friends = () => {
  return (
    <div className="friends">
      <div className="userChat">
        <img src={img} alt="user" />
        <div className="userChatInfo">
          <span>Kartikay</span>
          <p>Hello Pal</p>
        </div>
      </div>
    </div>
  );
};

export default Friends;
