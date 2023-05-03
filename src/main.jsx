import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Hero from './component/Hero/Hero.jsx';
import Recipes from './layout/Recipes.jsx';
import Details from './component/Details/Details.jsx';
import Login from './component/Login/Login.jsx';
import Rejister from './component/Rejister/Rejister.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import PrivetRoute from './component/PrivetRoute/PrivetRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: 'recipies',
    element: <Recipes></Recipes>,
    children: [
      {
        path: ':id',
        element: <PrivetRoute><Details></Details></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipies/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'rejister',
        element: <Rejister></Rejister>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
