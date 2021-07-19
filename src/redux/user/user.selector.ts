import { createSelector } from 'reselect'
import { IRootState } from '../root-reducer'

const userSelector = (state: IRootState) => state.user

export const selectCurrentUser = createSelector([userSelector], (user) => user.currentUser)

