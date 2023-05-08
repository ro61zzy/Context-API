import React, { useState } from 'react'
import '../App.css';

//what if we want to pass this user information and have it the profile section
const Login = () => {

    const [username,setUsername] = useState("")
    // const [showProfile, setShowProfile] = useState(false)

  return (
    < >
        <div className='form'>

        <input type='text' placeholder='Username...' onChange={(event)=>{setUsername(event.target.value)}} />
        <input type='text' placeholder='Password...'/>
        <button>LOGIN</button>
        {/* <button onClick={()=> {setShowProfile(true)}}>LOGIN</button> 
        {showProfile && <h1 className='user'>{username}</h1>}*/}
        </div>
    </>
  )
}

export default Login