import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import HomePage from './views/homepage/HomePage'
import ShopPage from './views/shop/Shop'
import SignInSignUp from './views/sign-in-sign-up/SignInSignUp'

import { authentication, createFireStoreProfileDocument } from './firebase/firebase.utils'
import { useEffect } from 'react'

import { connect } from 'react-redux'
import { User } from './types/firebase/User'
import { AnyAction, Dispatch } from 'redux'
import { setCurrentUser } from './redux/user/user.actions'
import { IRootState } from './redux/root-reducer'
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import Checkout from './components/checkout/Checkout'

import styled from 'styled-components'

interface IAppDispatchProps {
  setCurrentUser: (user: User | null) => {}
}

interface IAppStateProps {
  currentUser: User | null
}

function App({ setCurrentUser }: IAppDispatchProps, { currentUser }: IAppStateProps) {
  let unSubscribeFromAuth: { (): void } | null = null
  // console.log(currentUser, 'currentUser from props connect 4')
  useEffect(() => {
    unSubscribeFromAuth = authentication.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const resultReference = await createFireStoreProfileDocument(userAuth as unknown as User) // api call to firebase
        resultReference?.onSnapshot((snapshot) => {
          setCurrentUser({ uid: snapshot.id, ...snapshot.data() } as User)
        })
      } else {
        setCurrentUser(userAuth) // userauth should be null
      }
    })
    // cleanup
    return () => {
      if (unSubscribeFromAuth != null) unSubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </main>
    </div>
  )
}

// Todo: fix nullable user!
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user!)),
})

const mapStateToProps = createStructuredSelector<IRootState, IAppStateProps>({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
