import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { IRootState } from '../../redux/root-reducer'
import { selectShopSections } from '../../redux/shop/shop.selectors'
import Item from '../../types/Item'
import PreviewCollection from '../preview-collection/PreviewCollection'
import './CollectionsOverview.styles.scss'

interface ICollectionsOverviewProps {
  collectionData: any[]
}

const CollectionsOverview = ({ collectionData }: ICollectionsOverviewProps) => {
  return (
    <div className="collections-overview">
      {collectionData.map((collection) => (
        <PreviewCollection previewCollection={{ items: collection.items as unknown as Item[], title: collection.title }} key={collection.id} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, ICollectionsOverviewProps>({
  collectionData: selectShopSections,
})

export default connect(mapStateToProps)(CollectionsOverview)
