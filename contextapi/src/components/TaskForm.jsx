import { useRef } from "react";
import '../styles/TaskFormStyle.css'
import { useLanguage } from "../contexts/LanguageContext"


const TaskForm = ({ onFormSubmit, taskName}) => {

  const taskNameRef = useRef()

  const {language, toggleLanguage} = useLanguage();

      const translations = {
          en: {
            submit: 'submit',
            task: 'Task'

              
          },
          ge: {
            submit: 'გაგზავნა',
            task: 'დავალება'
             
          }
        }
      
 

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
        placeholder={translations[language].task}
        ref={taskNameRef}
        defaultValue={taskName}
      />
      <button type="submit">{translations[language].submit}</button>
    </form>
    </div>

  );
};

export default TaskForm;
