import { createSelector } from 'reselect'
import Item from '../../types/Item'
import { IRootState } from '../root-reducer'
import { IShopState } from './IShopState'
import memoize from 'lodash.memoize'

const selectShop = (state: IRootState): IShopState => state.shop

export const selectShopSections = createSelector([selectShop], (shop) => shop.shopSections)

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector([selectShopSections], (collection) => (collection ? collection[collectionUrlParam] : collection)),
)

export const selectCollectionsForPreview = createSelector([selectShopSections], (collection) => {
  console.log(collection  ? 'true' : 'false')
  console.log(collection)
  
  return collection ? (Object.keys(collection).map((key) => collection[key as keyof typeof collection])) : []
})


// export const selectCollection = memoize((collectionUrlParam: string) =>
//   createSelector(
//       [selectShopSections],
//       (collection) => collection.find(
//           (item) => item.id === COLLECTION_ID_MAP[collectionUrlParam])),
// )
