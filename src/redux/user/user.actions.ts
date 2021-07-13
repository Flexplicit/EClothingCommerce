import { User } from '../../types/firebase/User'
import { IReduxAction } from '../IReduxAction'

export const setCurrentUser = (user: User): IReduxAction<User> => ({
  type: 'SET_CURRENT_USER',
  payload: user,
})
