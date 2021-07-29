import Item from '../../types/Item'
import './CartItem.styles.scss'

interface ICartItemProps {
  cartItem: Item
  quantity: number
}

const CartItem = ({ cartItem, quantity }: ICartItemProps) => (
  <div className="cart-item">
    <img src={cartItem.imageUrl} alt="" />
    <div className="item-details">
      <span className="name">{cartItem.name}</span>
      <span className="price">
        {quantity} x {cartItem.price}€
      </span>
    </div>
  </div>
)

export default CartItem
