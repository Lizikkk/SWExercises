import { Link } from 'react-router-dom';
import '../styles/TaskItemStyle.css';
import {useTasksContext} from '../contexts/TasksContext'
import { useLanguage } from "../contexts/LanguageContext"

const MainPage = () => {
  const {language, toggleLanguage} = useLanguage();
      const translations = {
          en: {
              edit: 'Edit',
              delete: 'Delete'
          },
          ge: {
            edit: 'რედაქტირება',
            delete: 'წაშლა'
          }
      };
  const {taskList, dataLoading, deleteLoading, onDelete} = useTasksContext()

    if(dataLoading || deleteLoading) return <p className="loading-message">Loading...</p>;

    return(
    <div className="main-page-container">
      {taskList.map((task) => 
      <div key={task.id} className="task-item">
        <h3 className="task-name">{task.taskName}</h3>
        <input
          type='checkbox'
          className="task-checkbox"
          checked={task.isCompleted}
        />
        <Link to={`/update/${task.id}`} className="edit-link">{translations[language].edit}</Link>
        <button onClick={() => onDelete(task.id)} className="delete-button">{translations[language].delete}</button>
      </div>
      )}
    </div>
    );
};

export default MainPage;
