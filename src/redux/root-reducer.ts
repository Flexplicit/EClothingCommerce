import { combineReducers } from 'redux'
import { IUserState } from '../types/firebase/User'
import cartReducer from './cart/cart.reducer'
import { ICartState } from './cart/cart.types'
import userReducer from './user/user.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export interface IRootState {
  user: IUserState,
  cart: ICartState
}
