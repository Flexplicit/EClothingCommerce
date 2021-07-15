import { User } from '../../types/firebase/User'
import { IReduxAction } from '../IReduxAction'
import { userActiontypes } from './user.types'

export const setCurrentUser = (user: User): IReduxAction<User> => ({
  type: userActiontypes.SET_CURRENT_USER,
  payload: user,
})
