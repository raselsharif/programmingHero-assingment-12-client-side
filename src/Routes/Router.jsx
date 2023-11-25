import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home/Home/Home";
import JoinEmployee from "../Pages/JoinEmployee/JoinEmployee";
import JoinAdmin from "../Pages/JoinAdmin/JoinAdmin";
import Login from "../Pages/Login/Login";
import AssetsEmployee from "../Pages/Dashboard/Employee/AssetsEmployee/AssetsEmployee";
import RequestAssetEmployee from "../Pages/Dashboard/Employee/RequestAssetEmployee/RequestAssetEmployee";
import CustomRequestEmployee from "../Pages/Dashboard/Employee/CustomRequestEmployee/CustomRequestEmployee";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam/MyTeam";
import EmployeeProfile from "../Pages/Dashboard/EmployeeProfile/EmployeeProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/join-employee",
        element: <JoinEmployee />,
      },
      {
        path: "/join-admin",
        element: <JoinAdmin />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/assets-employee",
        element: <AssetsEmployee />,
      },
      {
        path: "/dashboard/request-assets",
        element: <RequestAssetEmployee />,
      },
      {
        path: "/dashboard/request-custom",
        element: <CustomRequestEmployee />,
      },
      {
        path: "/dashboard/my-team",
        element: <MyTeam />,
      },
      {
        path: "/dashboard/employee-profile",
        element: <EmployeeProfile />,
      },
    ],
  },
]);

export default router;
