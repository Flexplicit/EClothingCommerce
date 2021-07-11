import React, { useState } from 'react'
import { authentication, createFireStoreProfileDocument } from '../../firebase/firebase.utils'
import { User } from '../../types/firebase/User'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import './SignUp.styles.scss'

interface ISignUpState {
  email: string
  password: string
  displayName: string
}

const SignUp = () => {
  const [loginState, setLoginState] = useState({} as ISignUpState)

  const handleSubmit = async (event: Event) => {
    event.preventDefault()
    const { displayName, email, password } = loginState
    try {
      const { user } = await authentication.createUserWithEmailAndPassword(email, password)

      await createFireStoreProfileDocument(user as unknown as User, { displayName })
    } catch (error) {
      console.log(error.message, 'error signing up')
    }
  }

  return (
    <div className="sign-up">
      <h2>Register a new account</h2>
      <span>Sign up with email and password</span>

      <form onSubmit={(e) => handleSubmit(e.nativeEvent)}>
        <FormInput
          inputState={{
            type: 'text',
            value: loginState.email,
            handlechange: (ev) => setLoginState({ ...loginState, email: ev.value }),
            label: 'Email',
            required: true,
          }}
        />
        <FormInput
          inputState={{
            type: 'text',
            value: loginState.displayName,
            handlechange: (ev) => setLoginState({ ...loginState, displayName: ev.value }),
            label: 'Display name',
            required: true,
          }}
        />
        <FormInput
          inputState={{
            type: 'password',
            value: loginState.password,
            handlechange: (ev) => setLoginState({ ...loginState, password: ev.value }),
            name: 'password',
            label: 'Password',
            required: true,
          }}
        />
        <CustomButton
          customButton={{
            value: 'SIGN UP',
            type: 'submit',
            handleClick: () => {},
          }}
        />
      </form>
    </div>
  )
}
export default SignUp
