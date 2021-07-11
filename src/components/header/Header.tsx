import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { authentication } from '../../firebase/firebase.utils'


interface IHeaderProps{
  currentUser: {} | null;
}

const Header = (props: { headerProps: IHeaderProps }) => {
  // console.log(props.headerProps.currentUser)
  console.log(props.headerProps.currentUser)
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
        {props.headerProps.currentUser === null ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <div className="option" onClick={()=> authentication.signOut()}>
            SIGN OUT
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
