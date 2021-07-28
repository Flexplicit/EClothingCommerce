import { IReduxAction } from '../IReduxAction'
import { IRootState } from '../root-reducer'
import { IShopSectionNormalized } from '../types/IShopSection'

import { IShopState } from './IShopState'
import ShopActionsTypes from './shop.types'

const INITIAL_DATA: IShopState = {
  shopSections: null,
}

export const shopReducer = (state: IShopState = INITIAL_DATA, action: IReduxAction<IShopState> | IReduxAction<IShopSectionNormalized>): IShopState => {
  switch (action.type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS:
      state.shopSections = action.payload as IShopSectionNormalized
      break
  }
  return state
}
