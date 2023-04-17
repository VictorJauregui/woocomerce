import React, { useState } from 'react'
import LoginInApp from '../components/LoginInApp'
import RegisterInApp from '../components/RegisterInApp'


const Login = () => {
    const [signIn, setSignIn] = useState(true)

    
  return (
    signIn ? 
    <LoginInApp setSignIn={setSignIn}/>
        : 
    <RegisterInApp setSignIn={setSignIn}/>

  )
}

export default Login