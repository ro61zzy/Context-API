
import './App.css';
import Login from './Components/Login';
import { useState } from 'react';
import Profile from './Components/Profile';

//what we want to do is create a context between these two components, create a folder called context
function App() {

  const [showProfile, setShowProfile] = useState(false)

  return (
    <div className="App">
      {showProfile ? <Profile/> : <Login /> }
      
    </div>
  );
}

export default App;
