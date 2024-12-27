import { useState } from "react";
import '../styles/TaskFormStyle.css'

const TaskForm = ({ onFormSubmit }) => {
  const [taskName, setTask] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (taskName.trim() === '') {
      alert('Please enter a task name.');
      return;
    }

    onFormSubmit(taskName)
    setTask('')
  };

  return (
    <div className="task-form">
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={taskName}
        onChange={e => setTask(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </div>

  );
};

export default TaskForm;
