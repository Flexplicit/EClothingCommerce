import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route, useRouteMatch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import { IRootState } from '../../redux/root-reducer'
import { IShopState } from '../../redux/shop/IShopState'
import { selectShopSections } from '../../redux/shop/shop.selectors'
import { IShopSection } from '../../redux/types/IShopSection'
import Item from '../../types/Item'
import CategoryPage from '../category/CategoryPage'
import './ShopPage.scss'

// export interface IShopProps {
//   shopData: IShopSection
// }

const Shop = () => {
  const match = useRouteMatch()
  console.log(match, 'match')
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  )
}

export default Shop
