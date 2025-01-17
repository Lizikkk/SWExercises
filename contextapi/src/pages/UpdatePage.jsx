import { useNavigate, useParams } from "react-router-dom"
import TaskForm from "../components/TaskForm"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const UpdatePage = () => {
    const navigate = useNavigate()
    const {taskId} = useParams()
    const {response, loading, error} = useFetch({url: `/api/v1/tasks/${taskId}`, method: 'GET'})

    const {sendRequest} = useRequest({url:`/api/v1/tasks/${taskId}`, method:'PUT'})
    const onSubmit = (taskName) => {
        sendRequest({taskName})
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }
    if(loading && !response) return <p>Loading...</p>
    if(error || !response) return <p>Oops!</p>

    return <TaskForm
    onFormSubmit={onSubmit}
    taskName={response.taskName}
    userName={response.user}
    date={response.date}
/>
}

export default UpdatePage