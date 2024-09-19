import React from "react";
import "./chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" srcset="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" srcset="" />
          <img src="./video.png" alt="" srcset="" />
          <img src="./info.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
