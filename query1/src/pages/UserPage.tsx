import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchUser from '../hooks/queries/useFetchUser'
import { IUser } from '../interfaces/User.interface'
import UserItem from '../components/UserItem'

const UserPage:React.FC = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useFetchUser(id!)
    const {id:userId, name, email, phone} = data || ({} as IUser)

    if(error) return <h1>{error.message}</h1>
    if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <UserItem id={userId} name={name} email={email} phone={phone}/>
    </div>
  )
}

export default UserPage
