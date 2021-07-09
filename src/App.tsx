import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import HomePage from './views/homepage/HomePage'
import ShopPage from './views/shop/Shop'
import SignInSignUp from './views/sign-in-sign-up/SignInSignUp'

import { authentication } from './firebase/firebase.utils'
import { useEffect, useState } from 'react'
import firebase from 'firebase'

function App() {
  const [userState, setUserState] = useState({ currentUser: {} as Object | null })
  let unSubscribeFromAuth: { (): void; (): void } | null = null

  useEffect(() => {
    unSubscribeFromAuth = authentication.onAuthStateChanged((user) => {
      setUserState({ currentUser: user })
      console.log(user)
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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />

          {/* <Route component={Page404} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App
