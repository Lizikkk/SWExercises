import { useQuery } from "@tanstack/react-query"
import { IUser } from "../../interfaces/User.interface"
import fetchUser from "../../api/fetchUser"

const useFetchUser = (id:string) => {
    const result = useQuery<IUser>({
        queryKey:['user'],
        queryFn: () => fetchUser(id)
    })
    return result
}

export default useFetchUser
