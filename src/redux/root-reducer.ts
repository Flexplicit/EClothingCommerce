import { combineReducers } from 'redux'
import { IUserState } from '../types/firebase/User'
import cartReducer from './cart/cart.reducer'
import { ICartState } from './cart/cart.types'
import userReducer from './user/user.reducer'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { IDirectoryState } from './directory/IDirectoryState'
import directoryReducer from './directory/directory.reducer'
import { IShopState } from './shop/IShopState'
import  shopReducer  from './shop/shop.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}
const rootReducer  = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)

export interface IRootState {
  user: IUserState
  cart: ICartState
  directory: IDirectoryState
  shop: IShopState
}
