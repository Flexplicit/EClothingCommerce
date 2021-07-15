import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import HomePage from './views/homepage/HomePage'
import ShopPage from './views/shop/Shop'
import SignInSignUp from './views/sign-in-sign-up/SignInSignUp'

import { authentication, createFireStoreProfileDocument } from './firebase/firebase.utils'
import { useEffect, useState } from 'react'
import firebase from 'firebase'

import { connect } from 'react-redux'
// import { setCurrentUser } from './redux/user/user.actions'
import { IUserState, User } from './types/firebase/User'
import { AnyAction, Dispatch } from 'redux'
import { setCurrentUser } from './redux/user/user.actions'
import userReducer from './redux/user/user.reducer'
import SignIn from './components/account/SignIn'

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
        </Switch>
      </main>
    </div>
  )
}

// Todo: fix nullable user!
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user!)),
})

const mapStateToProps = (state: any): IAppStateProps => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
