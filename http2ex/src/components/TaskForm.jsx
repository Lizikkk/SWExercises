import { useRef } from "react";
import '../styles/TaskFormStyle.css'

const TaskForm = ({ onFormSubmit, taskName}) => {

  const taskNameRef = useRef()
 

  const onSubmit = (e) => {
    e.preventDefault()
    if(taskNameRef.current) {
      onFormSubmit(taskNameRef.current.value)
    }else{
        console.log('please fill all the information')
    }
}

  return (
    <div className="task-form">
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Task"
        ref={taskNameRef}
        defaultValue={taskName}
      />
       {/* <input
        type="text"
        placeholder="user"
        ref={userRef}
        defaultValue={user}
      />
      <input
        type="date"
        ref={dateRef}
        defaultValue={date}
      /> */}
      <button type="submit">Submit</button>
    </form>
    </div>

  );
};

export default TaskForm;
