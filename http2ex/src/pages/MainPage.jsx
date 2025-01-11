import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import '../styles/TaskItemStyle.css';
import useRequest from '../hooks/useRequest';

const MainPage = () => {
    const {response, error, loading, resendRequest} = useFetch({url:'/api/v1/tasks', method: 'GET' });
    const {sendRequest} = useRequest({method: 'DELETE'});
    const taskList = response?.items.map(task => {
      return{
        taskName: task.taskName,
        isCompleted: task.isCompleted,
        id: task._uuid
      };
    }) || [];

    const onDelete = (taskId) => {
      sendRequest(null, `/api/v1/tasks/${taskId}`)
      .then(() => resendRequest() )
      .catch((err) => console.log('Failed to delete task: ', err));
    };

    const onToggleComplete = (taskId, isCompleted) => {
      sendRequest({ isCompleted: !isCompleted }, `/api/v1/tasks/${taskId}`)
        .then(() => resendRequest())
        .catch((err) => console.error('Failed to update task:', err));
    };

    if(loading) return <p className="loading-message">Loading...</p>;
    if(error) return <p className="error-message">{error}</p>;

    return(
    <div className="main-page-container">
      {taskList.map((task) => 
      <div key={task.id} className="task-item">
        <h3 className="task-name">{task.taskName}</h3>
        <input
          type='checkbox'
          className="task-checkbox"
          checked={task.isCompleted}
          onChange={() => onToggleComplete(task.id, task.isCompleted)}
        />
        <Link to={`/update/${task.id}`} className="edit-link">Edit</Link>
        <button onClick={() => onDelete(task.id)} className="delete-button">Delete</button>
      </div>
      )}
    </div>
    );
};

export default MainPage;
