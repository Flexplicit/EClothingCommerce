import React from 'react'
import './SignInSignUp.style.scss'
import SignIn from '../../components/account/SignIn'
import SignUp from '../../components/account/SignUp'

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-out">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
