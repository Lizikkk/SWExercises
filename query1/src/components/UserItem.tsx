import React from 'react'
import { useNavigate } from 'react-router-dom'

interface UserItemProps{
    "id": number,
    "name": string,
    "email": string,
    "phone": string,
}
const UserItem:React.FC<UserItemProps> = ({id,name,email,phone}) => {
    const navigate = useNavigate()

  return (
    <div>
        <div style={{border:'1px solid', padding:'10px', margin:'10px'}}
         onClick={() => navigate(`/users/${id}`)} key={id}>
            <h3>{name}</h3>
            <li>{email}</li>
            <li>{phone}</li>

        </div>
      
    </div>
  )
}

export default UserItem
