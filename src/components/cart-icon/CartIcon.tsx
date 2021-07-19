import { Dispatch } from 'react'
import './CartIcon.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { IRootState } from '../../redux/root-reducer'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

interface ICartIconDispatchProps {
  toggleCartHidden: () => void
  quantity: number
}

const CartIcon = ({ toggleCartHidden, quantity }: ICartIconDispatchProps) => (
  <>
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  </>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStateToProps = (state: IRootState) => ({
  quantity: selectCartItemsCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
