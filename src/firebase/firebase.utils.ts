import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { User } from '../types/firebase/User'
import { data } from 'jquery'
import Item from '../types/Item'
import { IShopSection, IShopSectionNormalized } from '../redux/types/IShopSection'

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

export const createFireStoreProfileDocument = async (userAuthentication: User | null, additionalData?: {}) => {
  if (!userAuthentication) return

  const userReference = fireStore.doc(`users/${userAuthentication.uid}`)
  const userSnapshot = await userReference.get()
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuthentication
    const createdAt = new Date()

    try {
      await userReference.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating firebase user', error.message)
    }
  }

  return userReference
}
/**
 * Add collection of objects into firebase database.
 * @param  {string} collectionKey The name of the collection
 * @param  {TEntity[]} objectToAdd Array of objects to add
 * @return {Promise<void>} Promise to do so
 */

export async function addCollectionAndDocuments<TEntity>(collectionKey: string, objectToAdd: TEntity[]): Promise<void> {
  const collectionRef = fireStore.collection(collectionKey)
  console.log(objectToAdd)
  const batch = fireStore.batch()
  objectToAdd.forEach((entity) => {
    const newDocumentReference = collectionRef.doc() // random id will be generated for each entity
    batch.set(newDocumentReference, entity)
  })
  console.log(batch)
  return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>): IShopSectionNormalized => {
  const mappedSections = collections.docs.map((document) => {
    const { title, items } = document.data()
    return {
      routeName: encodeURI((title as string).toLowerCase()),
      id: document.id,
      title: title as string,
      items: items as Item[],
    }
  }) as IShopSection[]
  // convert to normalized shape
  return mappedSections.reduce((accumulator: IShopSectionNormalized, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const signInWithGoogle = () => authentication.signInWithPopup(provider)
export default firebase
