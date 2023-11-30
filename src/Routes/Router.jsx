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
import AdminAssetUpdate from "../Pages/Dashboard/Admin/AdminAssetUpdate/AdminAssetUpdate";
import HomeAdmin from "../Pages/Home/HomeAdmin/HomeAdmin";
import HomeEmployee from "../Pages/Home/HomeEmployee/HomeEmployee";
import Payment from "../Pages/Payment/Payment";
import AdminRoute from "./AdminRoute";
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
      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // Admin Routes
      {
        path: "/dashboard/admin-home",
        element: (
          <AdminRoute>
            <HomeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin-asset-list",
        element: (
          <AdminRoute>
            <AdminAssetList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin-add-asset",
        element: (
          <AdminRoute>
            <AdminAddAsset />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin-requests",
        element: (
          <AdminRoute>
            <AdminRequestsList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/custom-requests",
        element: (
          <AdminRoute>
            <CustomRequestList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin-all-employee",
        element: (
          <AdminRoute>
            <AdminEmployeeList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/admin-add-employee",
        element: (
          <AdminRoute>
            <AdminAddEmployee />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/asset-update/:id",
        element: (
          <AdminRoute>
            <AdminAssetUpdate />
          </AdminRoute>
        ),
      },
      // EmployeeRoutes

      {
        path: "/dashboard/employee-home",
        element: (
          <PrivateRoutes>
            <HomeEmployee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/assets-employee",
        element: (
          <PrivateRoutes>
            <AssetsEmployee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/request-assets",
        element: (
          <PrivateRoutes>
            <RequestAssetEmployee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/request-custom",
        element: (
          <PrivateRoutes>
            <CustomRequestEmployee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/my-team",
        element: (
          <PrivateRoutes>
            <MyTeam />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/employee-profile",
        element: (
          <PrivateRoutes>
            <EmployeeProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
