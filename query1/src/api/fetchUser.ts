import $api from "../http/axios";

export default async function fetchUser(id: string) {
    const res = await $api.get(`/users/${id}`)
    return res.data
    
}