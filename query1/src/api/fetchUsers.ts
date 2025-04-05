import $api from "../http/axios";

export default async function fetchUsers() {
    const res = await $api.get('/users')
    return res.data
    
}