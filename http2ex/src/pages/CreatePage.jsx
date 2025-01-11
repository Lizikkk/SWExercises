import { useNavigate } from "react-router-dom"
import TaskForm from "../components/TaskForm"
import useRequest from "../hooks/useRequest"

const CreatePage = () => {
    
  const {sendRequest, loading} = useRequest({url:'/api/v1/tasks', method:'POST'})
  const navigate = useNavigate()

  const onSubmit = (taskName) => {
    sendRequest({taskName})
    .then(() => navigate('/'))
    .catch(err => console.log(err))
  }

  if(loading) return <p>loading..</p>

    return <div>
      <TaskForm onFormSubmit={onSubmit} />
      </div>
}

export default CreatePage