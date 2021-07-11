import React from 'react'
import './CustomButton.styles.scss'

interface ICustomButtonProps {
  value: string
  handleClick: () => void
  isGoogleSignIn?: boolean
  [x: string]: any
}

const CustomButton = (props: { customButton: ICustomButtonProps }) => {
  const { value, isGoogleSignIn, handleClick, ...others } = props.customButton
  return (
    <button onClick={handleClick} className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...others}>
      {/* <button onClick={handleClick} className="custom-button" {...others}> */}
      {value}
    </button>
  )
}

export default CustomButton
