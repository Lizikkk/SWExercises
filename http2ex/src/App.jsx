import './App.css';
import routes from './routes/routes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  return <RouterProvider router={createBrowserRouter(routes)}/>
}

export default App;
