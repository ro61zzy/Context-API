import "./App.css";
import Login from "./Components/Login";
import { useState } from "react";
import Profile from "./Components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

//what we want to do is create a context between these two components, create a folder called context
//import the context and use it as a wrapper for the components you want it used in
//pass it as a provider ie by adding .Provider so that it can accept values
function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <LoginContext>{showProfile ? <Profile /> : <Login />}</LoginContext>
    </div>
  );
}

export default App;
