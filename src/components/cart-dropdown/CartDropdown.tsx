import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton
      customButton={{
        value: 'GO TO CHECKOUT',
        handleClick: () => {},
      }}
    />
  </div>
)

export default CartDropdown
