import React from "react";
import "./userinfo.css";
const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" />
        <h2>Shikhar</h2>
        <div className="icons">
          <img src="./more.png" alt=""/>
          <img src="./video.png" alt=""/>
          <img src="./edit.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
