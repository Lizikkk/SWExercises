import { createContext, useCallback, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const TasksContext = createContext(null)

const TasksContextProvider = ({children}) => {
    const {response, loading: dataLoading, resendRequest} = useFetch({url:'/api/v1/tasks', method: 'GET' });
    const {sendRequest, loading: deleteLoading} = useRequest({method: 'DELETE'});
   
    const taskList = useMemo(() => {
        return response?.items.map(task => {
            return{
              taskName: task.taskName,
              isCompleted: task.isCompleted,
              id: task._uuid
            };
          }) || [];
    }, [response])

    const onDelete = useCallback((taskId) => {
        sendRequest(null, `/api/v1/tasks/${taskId}`)
        .then(() => resendRequest() )
        .catch((err) => console.log('Failed to delete task: ', err));
      }, [resendRequest])

    const contextValue = useMemo(() => ({
        dataLoading,
        deleteLoading,
        taskList,
        onDelete
    }), [dataLoading, deleteLoading, taskList, onDelete])

    return <TasksContext.Provider value={contextValue}>
        {children}
    </TasksContext.Provider>

}

 export const useTasksContext = () => {
    const contextValue = useContext(TasksContext)
    if(!contextValue) throw new Error('Your component is not inside TasksContectProvider')
    
    return contextValue
}

export default TasksContextProvider