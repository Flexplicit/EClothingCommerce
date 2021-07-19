import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { authentication } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { User } from '../../types/firebase/User'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { IRootState } from '../../redux/root-reducer'

import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { createStructuredSelector } from 'reselect'

interface IHeaderProps {
  currentUser: User | null
  cartHidden: boolean
}

const Header = ({ currentUser, cartHidden }: IHeaderProps) => {
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
      {cartHidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, IHeaderProps>({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
