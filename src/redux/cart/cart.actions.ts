import { IReduxAction } from '../IReduxAction'
import { cartActionTypes, ICartState } from './cart.types'

export const toggleCartHidden = (): IReduxAction<ICartState> => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
  payload: null,
})
