import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { connect, useDispatch } from 'react-redux'
import { IRootState } from '../../redux/root-reducer'
import { ICartProduct } from '../../types/ICartProduct'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

interface ICartDropdownStateProps {
  cartItems: ICartProduct[]
  // cartToggle: () => void
}

const CartDropdown = ({ cartItems }: ICartDropdownStateProps) => {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((x) => <CartItem key={x.item.id} cartItem={x.item} quantity={x.quantity} />)
        ) : (
          <span className="empty-message">Your cart is empty düd</span>
        )}
      </div>
      <CustomButton
        customButton={{
          value: 'GO TO CHECKOUT',
          handleClick: () => {
            dispatch(toggleCartHidden());
            history.push('/checkout')
          },
        }}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, ICartDropdownStateProps>({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropdown)
