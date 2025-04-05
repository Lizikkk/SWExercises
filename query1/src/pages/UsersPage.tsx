import React from 'react'
import UserList from '../components/UserList'
import useFetchUsers from '../hooks/queries/useFetchUsers'

const UsersPage:React.FC = () => {
    const {data:users, error, isLoading} = useFetchUsers()

    if(error) return <h1>{error.message}</h1>
    if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <UserList users={users}/>
    </div>
  )
}

export default UsersPage
