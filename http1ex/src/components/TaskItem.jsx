import { useState } from "react"
import '../styles/TaskItemStyle.css'
const TaskItem = ({taskName, prevStatus, key}) => {
    const [isCompleted, setIsCompleted] = useState(prevStatus)
    const [editing, setEditing] = useState(false)
    const [editedTask, setEditedTask] = useState(taskName)

    const handleEdit = () => {
        setEditing(true)
    }

    const handleSave = () => {
        setEditing(false)
    }

    return (
        <div key={key} className="task-container">
            {editing ? (
                <div>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={e => setEditedTask(e.target.value)}
                        className="task-input"
                    />
                    <span className="task-status">{isCompleted ? 'Completed' : 'Not Completed'}</span>
                    <button onClick={handleSave} className="save-button">Save</button>
                </div>
            ) : (
                <div>
                    <h3 className="task-name">{taskName}</h3>
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => setIsCompleted(!isCompleted)}
                        className="task-checkbox"
                    />
                    <span className="task-status">{isCompleted ? 'Completed' : 'Not Completed'}</span>
                    <button onClick={handleEdit} className="edit-button">Edit</button>
                </div>
            )}
        </div>
    );
    

}

export default TaskItem;