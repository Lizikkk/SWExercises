import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";
import UpdatePage from "../pages/UpdatePage";
import TasksContextProvider from "../contexts/TasksContext";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Children } from "react";

const routes = [
    {
        element: (
            <div>
                <Header/>
                <Outlet/>
            </div>
        ),
        path: '/',
        children:[
            {
                element: (
                  <div>
                    <TasksContextProvider>
                        <MainPage/>
                    </TasksContextProvider>
                  </div>
                ),
        
                index: true
            },
            {
                element: <CreatePage/>,
                path: 'create'
            },
            {
                element: <UpdatePage/>,
                path: 'update/:taskId'
            }
        ]
    }
]

export default routes