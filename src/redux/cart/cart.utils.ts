import { ICartProduct } from '../../types/ICartProduct'
import Item from '../../types/Item'

export const addItemToCart = (cartItems: ICartProduct[], cartItemToAdd: Item): ICartProduct[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.item.id === cartItemToAdd.id)
  if (!existingCartItem) return [...cartItems, { item: cartItemToAdd, quantity: 1 }]
  // Increase current quantity
  existingCartItem.quantity++
  return cartItems.map((x) => x)
}
