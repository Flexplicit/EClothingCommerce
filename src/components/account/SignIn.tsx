import React, { ChangeEvent, useState } from 'react'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './SignIn.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils'

interface ISignInState {
  email: string
  password: string
}

const SignIn = () => {
  const [loginState, setLoginState] = useState({} as ISignInState)

  const handleSubmit = (event: Event) => {
    event.preventDefault()
    setLoginState({} as ISignInState)
  }

  return (
    <div className="sign-in">
      <h2>I Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={(e) => handleSubmit(e.nativeEvent)}>
        <FormInput
          inputState={{
            handlechange: (ev: HTMLInputElement) => setLoginState({ ...loginState, email: ev.value }),
            label: 'Email',
            type: 'email',
            name: 'email',
            id: 'email',
          }}
        />
        <FormInput
          inputState={{
            handlechange: (ev: HTMLInputElement) => setLoginState({ ...loginState, password: ev.value }),
            label: 'Password',
            type: 'password',
            name: 'password',
            id: 'password',
          }}
        />

        <CustomButton
          customButton={{
            type: 'submit',
            value: 'Log in',
            handleClick: ()=> console.log("click test") 
          }}
        />

        <CustomButton
          customButton={{
            value: 'Sign in with google',
            handleClick: signInWithGoogle,
          }}
        />
      </form>
    </div>
  )
}

export default SignIn