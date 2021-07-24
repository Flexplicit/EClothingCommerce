import { createSelector } from 'reselect'
import { IRootState } from '../root-reducer'

const selectDirectory = (state: IRootState) => state.directory

export const selectDirectorySection = createSelector([selectDirectory], (directory) => directory.sections)
