import axios from "axios";
import { TodoAction, TodoActionsTypes } from "../../types/todo";
import { Dispatch } from "@reduxjs/toolkit";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {

    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      });
      setTimeout(() => {
        dispatch({ type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: response.data })
      }, 1000)
    } catch (e) {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка при загрузке списка дел' })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionsTypes.FETCH_TODOS_PAGE, payload: page }
}