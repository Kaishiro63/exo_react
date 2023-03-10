import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const router = createBrowserRouter( [
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/todos',
        element: <Todos/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/users/id',
        element: <User/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)