import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
// import { initializeApp } from "firebase/app";
// import App from "../../App";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";
// import App from "../../App";
const Login = () => {
  // const auth = getAuth(App)
  const user = false;
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading , setLoading] = useState(false)

  

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);
    console.log(email,password)
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth,email,password);
      toast.success("Loged in ")
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }finally{
      setLoading(false)
    }

  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true)
    // toast.warn("hey");
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);
    try {
      // initializeApp(App)
      const imgUrl = await upload(avatar.file);
      console.log(imgUrl);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        avatar: imgUrl,
        username: username,
        email: email,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });
      toast.success("Account Done");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      
    }finally{
      setLoading(false)
    }

    console.log(username, email, password);
  };
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome To Chat App</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Enter your email ID" />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <button disabled={loading}>{loading ? "Loading": "Sign In" }</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h3>Hey Create An Account Before You Start</h3>
        <form onSubmit={handleRegister}>
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
          <button disabled={loading}>{loading ? "Loading": "Sign Up" }</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
