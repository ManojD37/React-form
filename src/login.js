import React, { useState } from "react";
import "./login.css";

import {  auth, signInWithEmailAndPassword } from "./firebase";

const Login = () => {
  const [leaderName, setLeaderName] = useState("");
  const [password, setPassword] = useState("");

  const handleLeaderNameChange = (e) => {
    setLeaderName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Authenticate the user with Firebase



    signInWithEmailAndPassword(auth, leaderName, password)
    .then((userCredential) => {
      // User sign up successful
      const user = userCredential.user;
      alert(`logged in user: ${user.email}`);
    })
    .catch((error) => {
      // Handle sign up errors
      alert(`login error: ${error.message}`);
    });

    setLeaderName("");
    setPassword("");
  };

  return (
    
    <div className="loginForm">
      <div className="loginFormChild" ></div>
      <b className="inblue">Inblue</b>
      <b className="login">Login</b>
      <div className="createAnAccountContainer">
        <span className="createAnAccountContainer1">
          <span>{`Not having an account? `}</span>
          <a href="/" className="signup">Sign Up</a>
        </span>
      </div>
      <div className="feedbackChild">
        <div className="feedbackChild" />
        <div className="simpleUnbelievableIm">
          Simple unbelievable! I’m really satisfied with the platform and also happy
          with Inblue. This is absolutely wonderful!
        </div>
        <div className="freelancer">Freelancer</div>
        <img
          className="pexelsAndreaPiacquadio37850Icon"
          alt=""
          src="/pexelsandreapiacquadio3785079-1@2x.png"
        />
        <b className="samKumar">Sam Kumar</b>
      </div>
      <img className="dotsIcon" alt="" src="/dots.svg" />
      <div className="nameEmail">
        <div className="leaderName">Leader Name / Email</div>
        <input
          type="text"
          className="nameEmailChild"
          value={leaderName}
          onChange={handleLeaderNameChange}
        />
      </div>

      <div className="loginBottonChild">
      <div className="loginBottonChild1"/>
        <div className="login1" />
        <button type="submit" className="loginBotton" id="saveButton" onClick={handleSubmit}>
          Login
        </button>
      </div>

      <div className="password">
        <div className="password1">Password</div>
        <input
          type="password"
          className="passwordChild"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="headlines">
        <div className="welcomeBackToContainer" />
      </div>
      <div className="welcomeBackTo"><p>
        Let’s create the world’s best community of leaders and support climate change with simple steps.</p></div>
      <b className="letsCreateWorlds">
        <span className="have-an-account-container1">
          {/* <p className="start-your1">{`Start your`}</p>
          <p className="start-your2">{`Leadership journey`}</p> */}
          <div classname="messgae">
          <p className="start-your1">Welcome back to </p>
          <p className="start-your2">Leadership journey</p>
          <p className="start-your3">with us</p>
          </div>
        </span>
      </b>
      {/* <b className="bye">👋</b> */}
    </div>
  );
};

export default Login;

