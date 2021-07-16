import { IUserState, User } from '../../types/firebase/User'
import { IReduxAction } from '../IReduxAction'
import { userActiontypes } from './user.types'

const INITIAL_STATE: IUserState = {
  currentUser: null,
}

const userReducer = (state = INITIAL_STATE, action: IReduxAction<User>) => {
  switch (action.type) {
    case userActiontypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }

    default:
      return state
  }
}

export default userReducer