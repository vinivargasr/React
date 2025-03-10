import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Ex001 from './Exercicios/Ex001.jsx'
import Ex002 from './Exercicios/Ex002.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Ex001",
    element: <Ex001/>
  },
  {
    path: "/Ex002",
    element: <Ex002/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
