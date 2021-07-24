import { useState } from 'react'
import Section from '../../types/Section'
import MenuItem from '../menuitem/MenuItem'
import { initialValue } from './DirectoryInitialValue'
import './Directory.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { IRootState } from '../../redux/root-reducer'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'

interface IDirectoryPropsState {
  sections: Section[]
}

const Directory = ({ sections }: IDirectoryPropsState) => {
  return (
    <>
      <div className="directory-menu">
        {sections.map((item) => (
          <MenuItem menuState={{ section: item }} key={item.id} />
        ))}
      </div>
    </>
  )
}

const mapStateToProps = createStructuredSelector<IRootState, IDirectoryPropsState>({
  sections: selectDirectorySection,
})

export default connect(mapStateToProps)(Directory)
