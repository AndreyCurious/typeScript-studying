import { UserState, UserAction, UserActionsTypes } from "../../types/user"

const initialSatate: UserState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (state = initialSatate, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionsTypes.FETCH_USERS:
      return { users: [], loading: true, error: null }
    case UserActionsTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: true, error: null }
    case UserActionsTypes.FETCH_USERS_ERROR:
      return { users: [], loading: true, error: action.payload }
    default:
      return state
  }
}
