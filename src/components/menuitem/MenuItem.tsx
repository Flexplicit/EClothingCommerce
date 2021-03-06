import React from 'react'
import * as reactRouter from 'react-router'
import Section from '../../types/Section'
import './MenuItem.styles.scss'

interface IMenuItemState {
  section: Section
  // history: RouteComponentProps
}

const MenuItem = (props: { menuState: IMenuItemState }) => {
  const history = reactRouter.useHistory()

  return (
    <div className={`${props.menuState.section.size ? props.menuState.section.size : ''} menu-item`} onClick={() => history.push(`/${props.menuState.section.linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${props.menuState.section.imageUrl})` }}></div>
      <div className="content">
        <h1 className="title">{props.menuState.section.title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  )
}

export default MenuItem
