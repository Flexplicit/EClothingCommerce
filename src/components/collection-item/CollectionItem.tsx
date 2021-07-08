import React from 'react'
import Item from '../../types/Item'
import './CollectionItem.style.scss'

const CollectionItem = ( item: Item) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
