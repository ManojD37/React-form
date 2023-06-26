import React, { useState } from "react";
import "./App.css";
import { db } from "./firebase";
import {addDoc , collection} from 'firebase/firestore';
import {auth, createUserWithEmailAndPassword } from "./firebase";


const SignUp = (props) => {
  const [leaderName, setLeaderName] = useState("");
  const [email, setEmail] = useState("");
  const [familyMemberEmail, setFamilyMemberEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [apartment, setApartment] = useState("");
  const [people, setPeople] = useState("");
  const [rooms, setRooms] = useState("");
  

  const handleLeaderNameChange = (e) => {
    setLeaderName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFamilyMemberEmailChange = (e) => {
    setFamilyMemberEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleApartmentChange = (e) => {
    setApartment(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
  };

  const handleRoomsChange = (e) => {
    setRooms(e.target.value);
  };

  
  const handleSignUp = (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(auth,  leaderName, password)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User sign up successful
        const user = userCredential.user;
        
        alert(`Signed up user: ${user.email}`);
      })
      .catch((error) => {
        // Handle sign up errors
        alert(`sign up error: ${error.message}`);
      });
      
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(e){
      await addDoc(collection(db,"sign-up"),{
        
        
        leaderName:leaderName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        familyMemberEmail:familyMemberEmail,
        apartment:apartment,
        people:people,
        rooms:rooms

      })
    }

    setLeaderName("");
    setEmail("");
    setFamilyMemberEmail("");
    setPassword("");
    setConfirmPassword("");
    setApartment("");
    setPeople("");
    setRooms("");
  };



  return (
    <div className="sign-up">
      <div className="sign-up-child" />
      <b className="inblue1">Inblue</b>
      <b className="sign-up1">Sign up</b>
     
      <div className="have-an-account-container">
            <span className="have-an-account-container1">
                <span>{`Have an account? `}</span>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Login .</button>
            </span>
        </div>


      <div className="feedback-widgets">
        <div className="feedback-widgets-child" />
        <div className="simple-unbelievable-im1">
          Simple unbelievable! I’m really satisfied with the platform and also happy
          with Inblue. This is absolutely wonderful!
        </div>
        <div className="freelancer1">Freelancer</div>
        <img
          className="pexels-andrea-piacquadio-37850-icon1"
          alt=""
          src="/pexelsandreapiacquadio3785079-1@2x.png"
        />
        <b className="sam-kumar1">Sam Kumar</b>
      </div>
      <img className="slide-dots-icon" alt="" src="/dots.svg" />
      <div className="name">
        <div className="family-members-email">Leader Name</div>
        <input
          type="text"
          className="name-child"
          value={leaderName}
          onChange={handleLeaderNameChange}
        />
      </div>
      <div className="email">
        <div className="family-members-email">Email</div>
        <input
          type="email"
          className="email-child"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="family-member-email">
        <div className="family-members-email">Family members Email</div>
        <input
          type="email"
          className="family-member-email-child"
          value={familyMemberEmail}
          onChange={handleFamilyMemberEmailChange}
        />
      </div>

      <div className="create-account">
        <div className="create-account-child" />
        <button type="submit" className="create-account1" id="saveButton">Create Account</button>
      </div>


      <div className="password2">
        <div className="family-members-email">Password</div>
        <input
          type="password"
          className="password-item"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="conform-password">
        <div className="family-members-email">Confirm Password</div>
        <input
          type="password"
          className="password-item"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div className="lets-create-worlds-best-comm-parent">
        <div className="lets-create-worlds1">{`Let’s create the world’s best community of leaders and support climate change with simple steps.`}</div>
        <b className="start-your-leadership-container">
          <span className="have-an-account-container1">
            <p className="start-your">{`Start your`}</p>
            <p className="start-your">{`Leadership journey`}</p>
            <p className="start-your">with us.</p>
          </span>
        </b>
        <b className="b">👋</b>
      </div>

      <div className="appartment-option">
        <div className="select-your-appartment-parent">
          <div className="family-members-email">Select Your Apartment</div>
          <select
            value={apartment}
            onChange={handleApartmentChange}
            className="grsoup-item "
          >
            <option value="">Select</option>
            <option value="1">apartment1</option>
            <option value="2">apartment2</option>
            <option value="3">apartment3</option>
            <option value="4">apartment4</option>
            <option value="5">apartment5</option>
            <option value="6">apartment6</option>
            <option value="7">apartment7</option>
            <option value="8">apartment8</option>
            <option value="9">apartment9</option>
            <option value="10">apartment10</option>
          </select>
        </div>
      </div>

      <div className="people-option">
        <div className="peoples-parent">
          <div className="peoples">Peoples</div>
          <select
            value={people}
            onChange={handlePeopleChange}
            className="group-item"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <img className="drop-option-icon1" alt="" src="/drop-option.svg" />
      </div>

      <div className="room-option">
        <div className="peoples-parent">
          <div className="peoples">Rooms</div>
          <select
            value={rooms}
            onChange={handleRoomsChange}
            className="group-item"
          >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <img className="drop-option-icon1" alt="" src="/drop-option.svg" />
      </div>
      <div className="create-account">
        <div className="create-account-child" />
        

        {/* button */}
        <button
        type="submit"
        className="create-account1"
        onClick={(e) => {
          handleSignUp(e);
          handleSubmit(e);
          
        }}
        id="saveButton"
      >
        Create Account
      </button>
        </div>
    </div>
  );
};

export default SignUp;

