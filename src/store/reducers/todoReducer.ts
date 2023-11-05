import { TodoAction, TodoActionsTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false,
}
export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
  console.log(action)
  switch (action.type) {
    case TodoActionsTypes.FETCH_TODOS:
      return { ...state, loading: true }
    case TodoActionsTypes.FETCH_TODOS_PAGE:
      return { ...state, loading: false, page: action.payload }
    case TodoActionsTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodoActionsTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}