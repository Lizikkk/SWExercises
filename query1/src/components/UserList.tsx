import React from 'react'
import { IUser } from '../interfaces/User.interface'
import UserItem from './UserItem'

interface UserListProps {
    users: IUser[] | undefined
}

const UserList:React.FC<UserListProps> = ({users}) => {
  return (
    <div>
    {users?.map(({id, name, email, phone})=> (
        <UserItem key={id} id={id} name={name} email={email} phone={phone}/>
    ))}
</div>
  )
}

export default UserList
