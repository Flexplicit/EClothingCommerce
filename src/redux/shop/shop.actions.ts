import { IReduxAction } from '../IReduxAction'
import { IShopSectionNormalized } from '../types/IShopSection'
import ShopActionsTypes from './shop.types'

export const updateShopCollections = (shopCollection: IShopSectionNormalized): IReduxAction<IShopSectionNormalized> => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: shopCollection,
})
