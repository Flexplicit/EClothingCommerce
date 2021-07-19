import CartItem from '../../components/cart-item/CartItem'
import { ICartProduct } from '../../types/ICartProduct'
import Item from '../../types/Item'

export const addItemToCart = (cartItems: ICartProduct[], cartItemToAdd: Item): ICartProduct[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.item.id === cartItemToAdd.id)
  if (!existingCartItem) return [...cartItems, { item: cartItemToAdd, quantity: 1 }]
  // Increase current quantity
  existingCartItem.quantity++
  return cartItems.map((x) => x)
}

export const decreaseCartItemQuantity = (cartItems: ICartProduct[], cartItemToDecrease: Item) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.item.id === cartItemToDecrease.id)

  if (existingCartItem!.quantity <= 1) {
    return cartItems.filter((x) => x.item.id != cartItemToDecrease.id)
  }
  existingCartItem!.quantity--
  return [...cartItems]
}
