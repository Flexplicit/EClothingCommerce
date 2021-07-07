import React from 'react'
import Section from '../../types/Section'
import './MenuItem.styles.scss'

interface IMenuItemState {
  section: Section
}

const MenuItem = (props: { menuState: IMenuItemState }) => {
  return (
    <div className={`${props.menuState.section.size ? props.menuState.section.size : ''} menu-item`}>
      <div className="background-image" style={{ backgroundImage: `url(${props.menuState.section.imageUrl})` }}>
        <div className="content">
          <h1 className="title">{props.menuState.section.title.toUpperCase()}</h1>
          <span className="subtitle">Shop now</span>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
