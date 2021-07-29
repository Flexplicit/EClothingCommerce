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
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from './Header.styles.jsx'

interface IHeaderProps {
  currentUser: User | null
  cartHidden: boolean
}

const Header = ({ currentUser, cartHidden }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser === null ? <OptionLink to="/signin">SIGN IN</OptionLink> : <OptionDiv onClick={() => authentication.signOut()}>SIGN OUT</OptionDiv>}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, IHeaderProps>({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header)
