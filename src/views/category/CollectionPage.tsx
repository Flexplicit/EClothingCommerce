import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { IRootState } from '../../redux/root-reducer'
import { selectCollection } from '../../redux/shop/shop.selectors'
import { IShopSection } from '../../redux/types/IShopSection'
import './CollectionPage.styles.scss'

interface MatchParams {
  collectionId: string
}

interface ICollectionPageProps {
  shopCollection: IShopSection | null
}

const CollectionPage = ({ shopCollection }: ICollectionPageProps) => {
  return (
    <div className="collection-page">
      <h2 className="title">{shopCollection?.title}</h2>
      <div className="items">
        {shopCollection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

// Todo: fix ownProps Types to have history, location, match
const mapStateToProps = (state: IRootState, ownProps: any): ICollectionPageProps => {
  debugger;
  console.log(state, "STATE IN COLLECTIONPAGE")
  return {
    shopCollection: selectCollection(ownProps.match.params.collectionId)(state),
  }
}
export default connect(mapStateToProps)(CollectionPage)
