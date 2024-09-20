import React from "react";
import { useState } from "react";
import {toast} from "react-toastify"
import "./login.css";
const Login = () => {

  const user = false;
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = e=>{
    e.preventDefault()
    toast.warn("hey")
  }
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome To Chat App</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter your email ID" />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <button>Log In</button>
        </form >
      </div>
      <div className="separator"></div>
      <div className="item">
        <h3>Hey Create An Account Before You Start</h3>
        <form>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload Your Profile Picture
          </label>

          <input
            type="file"
            name="image"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Your UserName"
          />
          <input type="text" name="email" placeholder="Enter Your Email" />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
