import { IReduxAction } from '../IReduxAction'
import { IShopSectionNormalized } from '../types/IShopSection'

import { IShopState } from './IShopState'
import ShopActionsTypes from './shop.types'

const INITIAL_DATA: IShopState = {
  shopSections: null,
}

const shopReducer = (state: IShopState = INITIAL_DATA, action: IReduxAction<IShopState> | IReduxAction<IShopSectionNormalized>): IShopState => {
  debugger
  switch (action.type) {
    case ShopActionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        shopSections: action.payload as IShopSectionNormalized,
      }
  }
  return state
}
export default shopReducer
