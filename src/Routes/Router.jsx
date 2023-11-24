import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter ([{
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      }
    ]
},
{
  path:'/dashboard',
element: <Dashboard/>
}

])

export default router;