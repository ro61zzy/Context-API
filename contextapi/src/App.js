import "./App.css";
import Login from "./Components/Login";
import { useState } from "react";
import Profile from "./Components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

//what we want to do is create a context between these two components, create a folder called context
//import the context and use it as a wrapper for the components you want it used in
//pass it as a provider ie by adding .Provider so that it can accept values that are going to represent the states that we want to share
//this means we don't create the username in the login component but in this higher order component
function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
