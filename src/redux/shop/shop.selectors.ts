import { createSelector } from 'reselect'
import Item from '../../types/Item'
import { IRootState } from '../root-reducer'
import { IShopState } from './IShopState'
import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP: { [key: string]: number } = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}

const selectShop = (state: IRootState): IShopState => state.shop

export const selectShopSections = createSelector([selectShop], (shop) => shop.shopSections)

export const selectCollection = memoize((collectionUrlParam: string) =>
  createSelector([selectShopSections], (collection) => collection.find((item) => item.id === COLLECTION_ID_MAP[collectionUrlParam])),
)
