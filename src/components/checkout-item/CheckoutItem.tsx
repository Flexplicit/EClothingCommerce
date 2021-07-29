import { Dispatch } from 'react'
import { connect } from 'react-redux'
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from '../../redux/cart/cart.actions'
import { IReduxAction } from '../../redux/IReduxAction'
import Item from '../../types/Item'
import './CheckoutItem.styles.scss'

interface ICheckoutItemStateProps {
  item: Item
  quantity: number
  addItem: (item: Item) => void
  removeItem: (item: Item) => void
  decreaseItemQuantity: (item: Item) => void
}

const CheckoutItem = ({ item, quantity, removeItem, addItem, decreaseItemQuantity }: ICheckoutItemStateProps) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div onClick={() => decreaseItemQuantity(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <div onClick={() => removeItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<IReduxAction<Item>>) => ({
  removeItem: (item: Item) => dispatch(removeItemFromCart(item)),
  addItem: (item: Item) => dispatch(addItemToCart(item)),
  decreaseItemQuantity: (item: Item) => dispatch(decreaseItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
