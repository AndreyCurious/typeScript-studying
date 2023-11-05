export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionsTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  FETCH_TODOS_PAGE = 'SET_TODO_PAGE'
}

interface FetchTodoAction {
  type: TodoActionsTypes.FETCH_TODOS;
}

interface FetchTodoActionSuccess {
  type: TodoActionsTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface FetchTodoActionError {
  type: TodoActionsTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface FetchTodoActionSetPage {
  type: TodoActionsTypes.FETCH_TODOS_PAGE;
  payload: number;

}

export type TodoAction = FetchTodoAction | FetchTodoActionError | FetchTodoActionSetPage | FetchTodoActionSuccess
