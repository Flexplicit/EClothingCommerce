import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import { ICartState } from '../../redux/cart/cart.types'
import { connect } from 'react-redux'

interface ICartDropdownStateProps {
  cart: ICartState
}

const CartDropdown = ({ cart }: ICartDropdownStateProps) => (
  <>
    {cart.hidden ? null : (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton
          customButton={{
            value: 'GO TO CHECKOUT',
            handleClick: () => {},
          }}
        />
      </div>
    )}
  </>
)

const mapStateToProps = (state: any) => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(CartDropdown)
