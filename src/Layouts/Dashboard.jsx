import { Outlet } from "react-router-dom";
import { DefaultSidebar } from "../Pages/Dashboard/SideNav/SideNav";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 px-4">
        <DefaultSidebar />
      </div>
      <div className="lg:col-span-9 h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
