import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Nav from './components/Nav.jsx'


const router = createBrowserRouter([
  {
    path:'/', element:<App/>,

    children:[
      {path:'/login', element:<Login/>},
      {path:'/', element:<Home/>},
      {path:'/nav', element:<Nav/>},
     
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
