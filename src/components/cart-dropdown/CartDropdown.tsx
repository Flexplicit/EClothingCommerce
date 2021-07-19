import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { connect } from 'react-redux'
import { IRootState } from '../../redux/root-reducer'
import { ICartProduct } from '../../types/ICartProduct'
import { selectCartItems } from '../../redux/cart/cart.selectors'

interface ICartDropdownStateProps {
  cartItems: ICartProduct[]
}

const CartDropdown = ({ cartItems }: ICartDropdownStateProps) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((x) => (
        <CartItem key={x.item.id} cartItem={x.item} quantity={x.quantity} />
      ))}
    </div>
    <CustomButton
      customButton={{
        value: 'GO TO CHECKOUT',
        handleClick: () => {},
      }}
    />
  </div>
)

const mapStateToProps = (state: IRootState): ICartDropdownStateProps => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
