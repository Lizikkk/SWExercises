import { Component } from "react"
import '../App.css'
import ListItems from "./ListItems"

class ToDoList extends Component {
  state = {
    inputValue: '',
    tasks: [{ id: 1, name: 'task1 description...' }, { id: 2, name: 'task2 description...' }],
    completedTasks: []
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
  }

  addTask = (event) => {
    event.preventDefault()

    const { inputValue, tasks, completedTasks } = this.state

    if (!inputValue.trim()) {
      alert("Task cannot be empty!")
      return
    }

    const task = {
                id: tasks.length + completedTasks.length + 1,
                name: inputValue
            }
        
            this.setState({
              tasks: [...tasks, task],
              inputValue: ''
            })
}

  completeTask = (id) => {
    const taskToComplete = this.state.tasks.find((task) => task.id === id)

    if (taskToComplete) {
      const remainingTasks = this.state.tasks.filter((task) => task.id !== id)
      const updatedCompletedTasks = [
        ...this.state.completedTasks, 
        { ...taskToComplete, isCompleted: true }
      ]

      this.setState({
        tasks: remainingTasks,
        completedTasks: updatedCompletedTasks
      })
    }
  }


  
  returnTask = (id) => {
    const taskToReturn = this.state.completedTasks.find((task) => task.id === id)

    if(taskToReturn){
        const updatedCompletedTasks = this.state.completedTasks.filter((task) => task.id !== id)
        const updatedTasks = [
            ...this.state.tasks,
            {...taskToReturn, isCompleted:false}
        ]

        this.setState({
            tasks: updatedTasks,
            completedTasks: updatedCompletedTasks
        })
    }
  }

  removeTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    const completedTasks = this.state.completedTasks.filter((task) => task.id !== id);

    this.setState({
      tasks,
      completedTasks
    })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.addTask} className="task-form">
          <input 
            type="text" 
            onChange={this.onChange} 
            value={this.state.inputValue} 
          />
          <button>Add Task</button>
        </form>

        <div className="tasks">
          <div className="TodoContainer">
            <h2>Todo</h2>
            <div className="task-container">
              {this.state.tasks.map((task) => (
                <ListItems
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  isCompleted={false}
                  complete={this.completeTask}
                  remove={this.removeTask}
                />
              ))}
            </div>
          </div>

          <div className="CompletedContainer">
            <h2>Completed</h2>
            <div className="task-container">
              {this.state.completedTasks.map((task) => (
                <ListItems
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  isCompleted={true}
                  complete={this.completeTask}
                  remove={this.removeTask}
                  restore={this.returnTask}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default ToDoList
