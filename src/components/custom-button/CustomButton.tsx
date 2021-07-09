import React from 'react'
import './CustomButton.styles.scss'

interface ICustomButtonProps {
  value: string
  handleClick: () => void
  [x: string]: any
}

const CustomButton = (props: { customButton: ICustomButtonProps }) => {
  const { value, handleClick, ...others } = props.customButton
  return (
    <button onClick={handleClick} className="custom-button" {...others}>
      {value}
    </button>
  )
}

export default CustomButton
