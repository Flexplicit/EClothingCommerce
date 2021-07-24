import { IReduxAction } from '../IReduxAction'
import { IRootState } from '../root-reducer'
import { INITIAL_SHOP_DATA } from './InitialShopData'
import { IShopState } from './IShopState'

export const shopReducer = (state: IShopState = INITIAL_SHOP_DATA, action: IReduxAction<IShopState>): IShopState => {
  switch (action.type) {
    default:
      return state
  }
}
