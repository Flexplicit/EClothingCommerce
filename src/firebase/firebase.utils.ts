import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// this is safe key
const firebaseConfig = {
  apiKey: 'AIzaSyAjSmnJXa-DwyPDD3hYRBD0-NP6FAjebfM',
  authDomain: 'fir-auth-b45da.firebaseapp.com',
  projectId: 'fir-auth-b45da',
  storageBucket: 'fir-auth-b45da.appspot.com',
  messagingSenderId: '1016418814931',
  appId: '1:1016418814931:web:ba79fa0bea15984f8dfd26',
  measurementId: 'G-EH0GYD3LRT',
}

firebase.initializeApp(firebaseConfig)

export const authentication = firebase.auth()
export const fireStore = firebase.firestore()

// google auth
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })


export const signInWithGoogle = () => authentication.signInWithPopup(provider)
export default firebase
