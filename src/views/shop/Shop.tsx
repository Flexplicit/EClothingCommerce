import React, { useState } from 'react'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'
import { SHOP_DATA } from '../../data/ShopData'
import Item from '../../types/Item'
import "./ShopPage.scss"
const Shop = () => {
  const [shopState, setShopState] = useState(SHOP_DATA)

  return (
    <div className="shop-page">
      {shopState.map((collection) => (
        <PreviewCollection 
        previewCollection={{ items: collection.items as unknown as Item[], title: collection.title }}
        key={collection.id} />
      ))}
    </div>
  )
}

export default Shop
