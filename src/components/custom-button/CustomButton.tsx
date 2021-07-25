import React from 'react'
import { CustomButtonContainer } from './CustomButton.styles'
// import './CustomButton.styles.scss'

interface ICustomButtonProps {
  value: string
  handleClick: () => void
  isGoogleSignIn?: boolean
  inverted?: boolean
  [x: string]: any
}

const CustomButton = (props: { customButton: ICustomButtonProps }) => {
  const { value , handleClick, ...others } = props.customButton
  return (
    <CustomButtonContainer onClick={handleClick} {...others}>
      {value}
    </CustomButtonContainer>
  )
}

export default CustomButton
