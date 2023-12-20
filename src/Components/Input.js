import React from "react";

const Input = () => {
  return (
    <div className="input-msgs">
      <input type="text" placeholder="Enter your code here..." />
      <div className="send">
        <label htmlFor="send-img">
          <i class="fa-solid fa-paperclip"></i>
        </label>
        <input type="file" id="send-img" style={{ display: "none" }} />
        <button>
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;
