import React, { useState, useContext } from "react";
import "../App.css";
import { LoginContext } from "../Contexts/LoginContext";

//what if we want to pass this user information and have it the profile section
//so now here, to access the username state, import useContext and LoginContext, then destructure the variables that we got from the LoginContext
const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  //const [username,setUsername] = useState("")
  // const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <div className="form">
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input type="text" placeholder="Password..." />
        <button
          onClick={() => {
            setShowProfile(true);
          }}
        >
          LOGIN
        </button>
        {/* <button onClick={()=> {setShowProfile(true)}}>LOGIN</button> 
        {showProfile && <h1 className='user'>{username}</h1>}*/}
      </div>
    </>
  );
};

export default Login;
