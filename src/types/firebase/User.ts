export interface User {
  createdAt: Date
  displayName: string
  email: string
  uid: string | null
}

export interface IUserState {
  currentUser: User | null
}

export const initialAppState: IUserState = {
  currentUser: null,
}
