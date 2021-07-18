import { ICartProduct } from '../../types/ICartProduct'
import Item from '../../types/Item'
import { IReduxAction } from '../IReduxAction'
import { cartActionTypes, ICartState } from './cart.types'

export const toggleCartHidden = (): IReduxAction<ICartState> => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
  payload: null,
})

export const addItemToCart = (item: Item): IReduxAction<Item> => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
})
