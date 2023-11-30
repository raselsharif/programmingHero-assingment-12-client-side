import { Link, Outlet } from "react-router-dom";
import { DefaultSidebar } from "../Pages/Dashboard/SideNav/SideNav";
import useSingleUser from "../hooks/useSingleUser";
import { Button } from "@material-tailwind/react";

const Dashboard = () => {
  const user = useSingleUser();
  return (
    <div>
      {user?.workAt === null ? (
        <div className="h-screen flex flex-col items-center justify-center ">
          <h2 className="text-2xl">
            You are not joined team, Pls contact with your HR/Admin
          </h2>
          <Link to={"/"}>
            <Button color="blue-gray" className="mt-4">
              Back To Home
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          <div className="col-span-3 px-4">
            <DefaultSidebar />
          </div>
          <div className="col-span-9 h-screen">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
