import { useState } from 'react'
import Section from '../../types/Section'
import MenuItem from '../menuitem/MenuItem'
import { initialValue } from './DirectoryInitialValue'
import './Directory.styles.scss'

interface IDirectoryState {
  sections: Section[]
}

const Directory = () => {
  const [sectionState, setSectionState] = useState(initialValue)
  return (
    <div className="directory-menu">
      {sectionState.map((item) => (
        <MenuItem menuState={{ section: item }} key={item.id} />
      ))}
    </div>
  )
}

export default Directory
