import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { setupStore } from './store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setupStore()}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
