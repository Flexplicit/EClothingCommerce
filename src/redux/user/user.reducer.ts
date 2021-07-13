import { IUserState, User } from '../../types/firebase/User'
import { IReduxAction } from '../IReduxAction';

const INITIAL_STATE: IUserState = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action: IReduxAction<User>) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return{
                ...state, 
                currentUser: action.payload
            }
    
        default:
            return state;
    }
}


export default userReducer