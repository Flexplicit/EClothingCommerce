import React, { Reducer, ReducerState } from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { authentication } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import userReducer from '../../redux/user/user.reducer'
import { User } from '../../types/firebase/User'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { ICartState } from '../../redux/cart/cart.types'
import { IRootState } from '../../redux/root-reducer'

interface IHeaderProps {
  currentUser: User | null
  cart: ICartState
}

const Header = ({ currentUser, cart }: IHeaderProps) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser === null ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={() => authentication.signOut()}>
            SIGN OUT
          </div>
        )}
        <CartIcon />
      </div>
      {cart.hidden ? null : <CartDropdown />}
    </div>
  )
}

//TODO: fix type
const mapStateToProps = (state: IRootState): IHeaderProps => ({
  currentUser: state.user.currentUser,
  cart: state.cart,
})

export default connect(mapStateToProps)(Header)
