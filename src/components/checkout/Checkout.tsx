import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors'
import { IRootState } from '../../redux/root-reducer'
import { ICartProduct } from '../../types/ICartProduct'
import CheckoutItem from '../checkout-item/CheckoutItem'
import './Checkout.style.scss'

interface ICheckoutProps {
  cartItems: ICartProduct[]
  totalValue: number
}

const Checkout = ({ cartItems, totalValue }: ICheckoutProps) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartProduct) => (
        <CheckoutItem key={cartProduct.item.id} item={cartProduct.item} quantity={cartProduct.quantity} />
      ))}
      <div className="total">
        <span>TOTAL : {totalValue}€</span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, ICheckoutProps>({
  cartItems: selectCartItems,
  totalValue: selectCartTotalPrice,
})

export default connect(mapStateToProps)(Checkout)
