import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'
import HomePage from './views/homepage/HomePage'
import ShopPage from './views/shop/Shop'
import SignInSignUp from './views/sign-in-sign-up/SignInSignUp'

import { authentication, createFireStoreProfileDocument } from './firebase/firebase.utils'
import { useEffect, useState } from 'react'
import firebase from 'firebase'
import { initialAppState, User } from './types/firebase/User'

function App() {
  const [userState, setUserState] = useState(initialAppState)
  let unSubscribeFromAuth: { (): void; (): void } | null = null

  useEffect(() => {
    unSubscribeFromAuth = authentication.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const resultReference = await createFireStoreProfileDocument(userAuth as unknown as User) // api call to firebase
        resultReference?.onSnapshot((snapshot) => {
          setUserState({ currentUser: { uid: snapshot.id, ...snapshot.data() } as User })
        })
      } else {
        setUserState({ currentUser: userAuth }) // userauth should be null
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
        <Header/>
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
