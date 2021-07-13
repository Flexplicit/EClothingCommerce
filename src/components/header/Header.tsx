import React, { Reducer, ReducerState } from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { authentication } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import userReducer from '../../redux/user/user.reducer'

interface IHeaderProps {
  currentUser: {} | null
}

const Header = ({ currentUser }: IHeaderProps) => {
  
  console.log(currentUser)
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
      </div>
    </div>
  )
}

//TODO: fix type
const mapStateToProps = (state: any): IHeaderProps => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header)
