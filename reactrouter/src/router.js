import LinkLayout from "./layouts/LinkLayout";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import FactIdPage from './pages/FactIdPage'
import ErrorPage from "./pages/ErrorPage";

const router = [
    
    {
        element:<LinkLayout/>,
        path: '/',
        children:[
            {
                element: <MainPage/>,
                index:true
            },
            {
                element: <AboutPage/>,
                path: '/about'
            },
            {
                element:<FactIdPage/>,
                path: '/:factId'
            },
            {
                element: <ErrorPage/>,
                path:'*'
        
            }
    ]}
    
]


export default router;