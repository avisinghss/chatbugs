import React from "react";
import img from "../image/user2.jpg";

const Message = () => {
  return (
    <div className="msg owner">
      <div className="msg-info">
        <img src={img} alt="user" />
        <span>just now</span>
      </div>
      <div className="msg-contant">
        <p>Hello pal...</p>
        {/* <img src="" alt="msg-img" /> */}
      </div>
    </div>
  );
};

export default Message;
