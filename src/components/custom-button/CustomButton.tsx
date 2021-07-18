import React from 'react'
import './CustomButton.styles.scss'

interface ICustomButtonProps {
  value: string
  handleClick: () => void
  isGoogleSignIn?: boolean
  inverted?: boolean
  [x: string]: any
}

const CustomButton = (props: { customButton: ICustomButtonProps }) => {
  const { value, isGoogleSignIn, inverted, handleClick, ...others } = props.customButton
  return (
    <button onClick={handleClick} className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...others}>
      {value}
    </button>
  )
}

export default CustomButton
