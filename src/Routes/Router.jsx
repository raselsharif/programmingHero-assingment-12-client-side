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
import EmployeeProfile from "../Pages/Dashboard/Employee/EmployeeProfile/EmployeeProfile";
import AdminAssetList from "../Pages/Dashboard/Admin/AdminAssetList/AdminAssetList";
import AdminAddAsset from "../Pages/Dashboard/Admin/AdminAddAsset/AdminAddAsset";
import AdminRequestsList from "../Pages/Dashboard/Admin/AdminRequestsList/AdminRequestsList";
import CustomRequestList from "../Pages/Dashboard/Admin/CustomRequestList/CustomRequestList";
import AdminEmployeeList from "../Pages/Dashboard/Admin/AdminEmployeeList/AdminEmployeeList";
import AdminAddEmployee from "../Pages/Dashboard/Admin/AdminAddEmployee/AdminAddEmployee";
import Packages from "../components/Home/Packages/Packages";
import PrivateRoutes from "./PrivateRoutes";

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
      {
        path: "/packages",
        element: <Packages />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // Admin Routes
      {
        path: "/dashboard/admin-asset-list",
        element: <AdminAssetList />,
      },
      {
        path: "/dashboard/admin-add-asset",
        element: <AdminAddAsset />,
      },
      {
        path: "/dashboard/admin-requests",
        element: <AdminRequestsList />,
      },
      {
        path: "/dashboard/custom-requests",
        element: <CustomRequestList />,
      },
      {
        path: "/dashboard/admin-all-employee",
        element: <AdminEmployeeList />,
      },
      {
        path: "/dashboard/admin-add-employee",
        element: <AdminAddEmployee />,
      },
      // EmployeeRoutes
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
