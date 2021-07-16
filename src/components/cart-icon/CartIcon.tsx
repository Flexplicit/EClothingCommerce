import React, { Dispatch } from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ICartState } from '../../redux/cart/cart.types'

interface ICartIconDispatchProps {
  toggleCartHidden: () => void
}


const CartIcon = ({ toggleCartHidden }: ICartIconDispatchProps) => (
  <>
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  </>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})


export default connect(null, mapDispatchToProps)(CartIcon)
