import { Dispatch } from 'react'
import { connect } from 'react-redux'

import { addItemToCart } from '../../redux/cart/cart.actions'
import { IReduxAction } from '../../redux/IReduxAction'
import Item from '../../types/Item'
import CustomButton from '../custom-button/CustomButton'
import './CollectionItem.style.scss'

interface ICollectionItemProps {
  item: Item
  addItem: (item: Item) => void
}

const CollectionItem = ({ item, addItem }: ICollectionItemProps) => {
  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        customButton={{
          value: 'Add to cart',
          inverted: true,
          handleClick: () => addItem(item),
        }}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<IReduxAction<Item>>) => ({
  addItem: (item: Item) => dispatch(addItemToCart(item)),
})


export default connect(null, mapDispatchToProps)(CollectionItem)
