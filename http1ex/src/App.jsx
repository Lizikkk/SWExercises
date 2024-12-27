import { use, useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem'

const API_KEY = 'pp6-hbaclfd1sXXQJU3RLoJnr713BHZA2RmhS_9kPXQVzCx30g'

function App() {
  const [taskList, setTaskList] = useState([])


  useEffect(() => {
    fetch ('/api/v1/tasks', {
      method : 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
    }).then(res => {
      if(!res.ok) throw new Error('response failed!')
      return res.json()
    })
    .then(data => setTaskList(data.items.map(task => {
      return{
        taskName: task.taskName,
        isCompleted: task.isCompleted,
        id: task._uuid
      }
    })))
    .catch(err => console.log(err))

  })

  const onFormSubmit = (taskName, isCompleted) => {
      fetch('/api/v1/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{ taskName }])
    })
    .then(res => {
      if (!res.ok) throw new Error('Response Failed')
      return res.json()
    })
    .then(data => setTaskList((prev) => [...prev,
       {taskName: data.items[0].taskName,
         isCompleted: data.items[0].isCompleted,
         id: data.items[0]._uuid }
        ]))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <TaskForm onFormSubmit={onFormSubmit} />
      {taskList.map(task => (
        <TaskItem taskName={task.taskName}/>
      ))}
    </div>
  );
}

export default App;
