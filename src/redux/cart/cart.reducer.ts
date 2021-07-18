import { act } from 'react-dom/test-utils'
import { ICartProduct } from '../../types/ICartProduct'
import Item from '../../types/Item'
import { IReduxAction } from '../IReduxAction'
import { cartActionTypes, ICartState } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE: ICartState = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action: IReduxAction<ICartState> | IReduxAction<Item>): ICartState => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload as Item),
      }
    default:
      return state
  }
}

export default cartReducer
