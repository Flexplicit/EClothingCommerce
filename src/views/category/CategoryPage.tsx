import React from 'react'
import { connect } from 'react-redux'
import { match, RouteComponentProps, useParams, useRouteMatch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { IRootState } from '../../redux/root-reducer'
import { selectCollection } from '../../redux/shop/shop.selectors'
import { IShopSection } from '../../redux/types/IShopSection'
import Item from '../../types/Item'
import './CategoryPage.styles.scss'

interface MatchParams {
  collectionId: string
}

interface ICategoryPageProps {
  shopCollection?: IShopSection
}

const CategoryPage = ({shopCollection} : ICategoryPageProps) => {

  // const { collectionId } = useParams<{ collectionId: string }>()
  console.log(shopCollection)
  return (
    <div className="category">
      <h2 className="title">Category page</h2>
      <CollectionItem item={{} as Item} />
    </div>
  )
}

// const mapStateToProps = () => {
//   const { collectionId } = useParams<{ collectionId: string }>()
//   const tmp = selectCollection(collectionId)
//   return createStructuredSelector<IRootState, ICategoryPageProps>({
//     shopCollection: tmp,
//   })
// }

// createStructuredSelector<IRootState, ICategoryPageProps>({
//   shopCollection: selectCollection,
// })


// Todo: fix ownProps Types to have history, location, match
const mapStateToProps = (state: IRootState, ownProps: any): ICategoryPageProps => ({
  shopCollection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CategoryPage)
