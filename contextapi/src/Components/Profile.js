import React, { useContext } from "react";
import "../App.css";
import { LoginContext } from "../Contexts/LoginContext";
// now to access tyhe name of the user that is logged in, we create a context in both these components to pass variables through that context
const Profile = () => {
  const { username } = useContext(LoginContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#fff" }}>Hello</h1>
      <h2 className="user">User: {username}</h2>
    </div>
  );
};

export default Profile;
