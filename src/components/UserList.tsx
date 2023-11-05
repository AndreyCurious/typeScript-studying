import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useAction } from '../hooks/useActions';


const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user)
  const { fetchUsers } = useAction();


  useEffect(() => {
    fetchUsers();
  }, [])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList;