import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Layouts/Dashboard";

const router = createBrowserRouter ([{
    path: "/",
    element: <MainLayout/>
},
{
  path:'/dashboard',
element: <Dashboard/>
}

])

export default router;