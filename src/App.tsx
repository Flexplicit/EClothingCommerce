import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import HomePage from './views/homepage/HomePage'
import ShopPage from './views/shop/Shop'
import SignInSignUp from './views/sign-in-sign-up/SignInSignUp'

import { authentication, createFireStoreProfileDocument } from './firebase/firebase.utils'
import { useEffect, useState } from 'react'
import firebase from 'firebase'
import { User } from './types/firebase/User'

function App() {
  const [userState, setUserState] = useState({ currentUser: {} as User | null })
  let unSubscribeFromAuth: { (): void; (): void } | null = null

  useEffect(() => {
    unSubscribeFromAuth = authentication.onAuthStateChanged(async (user) => {
      const res = await createFireStoreProfileDocument(user as User)
      setUserState({ currentUser: user as User })
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
        <Header headerProps={userState} />
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
