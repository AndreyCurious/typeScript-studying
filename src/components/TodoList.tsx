import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useActions';

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(state => state.todo)
  const pages = [1, 2, 3, 4, 5]

  const { fetchTodos, setTodoPage } = useAction();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  } else if (error) {
    return <h1>{error}</h1>
  }





  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.id} - {todo.title}</div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{ border: p === page ? '2px solid green' : '1px solid gray', padding: '10px' }}
          >{p}</div>
        ))}
      </div>

    </div>
  )
}

export default TodoList;