import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router'

function App() {
  return (
    <div>
      <RouterProvider router = {createBrowserRouter(router)} />
    </div>
  );
}

export default App;
