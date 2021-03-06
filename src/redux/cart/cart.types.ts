import { ICartProduct } from '../../types/ICartProduct'

export const cartActionTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  DECREASE_ITEM_QUANTITY: 'DECREASE_ITEM_QUANTITY',
}

export interface ICartState {
  hidden: boolean
  cartItems: ICartProduct[]
  //items etc... todo
}
