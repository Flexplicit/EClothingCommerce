import React from 'react'
import Item from '../../types/Item'
import CollectionItem from '../collection-item/CollectionItem'
import './PreviewCollection.styles.scss'

interface IPreviewCollectionState {
  title: string
  items: Item[]
}

const PreviewCollection = (props: { previewCollection: IPreviewCollectionState }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.previewCollection.title.toUpperCase()}</h1>
      <div className="preview">
        {props.previewCollection.items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
            // <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  )
}

export default PreviewCollection
