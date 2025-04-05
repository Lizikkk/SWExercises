import { useQuery } from "@tanstack/react-query"
import { IUser } from "../../interfaces/User.interface"
import fetchUsers from "../../api/fetchUsers"

const useFetchUsers = () => {
     const result = useQuery<IUser[]>({
        queryKey: ['users'],
        queryFn: fetchUsers
    })
  return result
}

export default useFetchUsers
