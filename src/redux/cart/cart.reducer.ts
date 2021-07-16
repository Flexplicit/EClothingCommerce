import { IReduxAction } from '../IReduxAction'
import { cartActionTypes, ICartState } from './cart.types'

const INITIAL_STATE: ICartState = {
  hidden: true,
}

const cartReducer = (state = INITIAL_STATE, action: IReduxAction<ICartState>) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }

    default:
      return state;
  }
}

export default cartReducer