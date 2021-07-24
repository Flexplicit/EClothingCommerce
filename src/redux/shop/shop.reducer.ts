import { IReduxAction } from '../IReduxAction'
import { IRootState } from '../root-reducer'
import { SHOP_DATA } from './InitialShopData'
import { IShopState } from './IShopState'

const INITIAL_DATA: IShopState = {
  shopSections: SHOP_DATA,
}

export const shopReducer = (state: IShopState = INITIAL_DATA, action: IReduxAction<IShopState>): IShopState => {
  switch (action.type) {
    default:
      return state
  }
}
