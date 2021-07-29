import { Dispatch, useEffect, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import './ShopPage.scss'
import { convertCollectionSnapshotToMap, fireStore } from '../../firebase/firebase.utils'
import { IShopSectionNormalized } from '../../redux/types/IShopSection'
import { connect } from 'react-redux'
import { updateShopCollections } from '../../redux/shop/shop.actions'
import { IReduxAction } from '../../redux/IReduxAction'
import WithSpinner from '../../components/with-spinner/WithSpinner'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../category/CollectionPage'
import Spinner from '../../components/with-spinner/WithSpinner'

interface IShopProps {
  updateShopData: (input: IShopSectionNormalized) => void
}
interface IShopComponentState {
  isLoading: boolean
  unSubscribeFromSnapShot: (() => void) | null
}

const Shop = ({ updateShopData }: IShopProps) => {
  const [shopComponentState, setShopComponentState] = useState({ isLoading: true, unSubscribeFromSnapShot: null } as IShopComponentState)
  const match = useRouteMatch() // collectionId if exists

  const loadData = async () => {
    debugger
    const collectionReference = fireStore.collection('collections')
    const unSubscribeFromSnapshot = collectionReference.onSnapshot(async (snapshot) => {
      const res = convertCollectionSnapshotToMap(snapshot)

      updateShopData(res)
      setShopComponentState({ unSubscribeFromSnapShot: unSubscribeFromSnapshot, isLoading: false })
    })
  }

  // const testAsync = async () => await loadData().then(() => setShopComponentState({ unSubscribeFromSnapShot: null, isLoading: false }))

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    debugger
    loadData()
  }, [match]) // dep might not be necessary

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} render={(props) => (shopComponentState.isLoading ? <Spinner /> : <CollectionsOverview {...props} />)} />
      <Route exact path={`${match.path}/:collectionId`} render={(props) => (shopComponentState.isLoading ? <Spinner /> : <CollectionPage {...props} />)} />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<IReduxAction<IShopSectionNormalized>>) => ({
  updateShopData: (data: IShopSectionNormalized) => dispatch(updateShopCollections(data)),
})

export default connect(null, mapDispatchToProps)(Shop)
