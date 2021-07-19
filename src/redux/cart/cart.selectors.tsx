import { createSelector } from 'reselect'
import { IRootState } from '../root-reducer'
import { ICartState } from './cart.types'

// Input selector, gets whole state and returns a slice of it so we can use it in multiple places without writing the same stuff all the time.

const selectCart = (state: IRootState): ICartState => state.cart

// CreateSelector memoizes the data.
export const selectCartItems = createSelector(
  [selectCart], // input selectors
  (items) => items.cartItems, //
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    (cartItems) => 
    cartItems.reduce((acc, current) => acc + current.quantity, 0),
)
