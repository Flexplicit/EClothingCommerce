import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { IRootState } from '../../redux/root-reducer'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { IShopSection } from '../../redux/types/IShopSection'
import PreviewCollection from '../preview-collection/PreviewCollection'
import './CollectionsOverview.styles.scss'

interface ICollectionsOverviewProps {
  collectionData: IShopSection[]
}

const CollectionsOverview = ({ collectionData }: ICollectionsOverviewProps) => {
  debugger;
  return (
    <div className="collections-overview">
      {collectionData.map((collection) => (
        <PreviewCollection previewCollection={{ items: collection.items, title: collection.title }} key={collection.id} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, ICollectionsOverviewProps>({
  collectionData: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
