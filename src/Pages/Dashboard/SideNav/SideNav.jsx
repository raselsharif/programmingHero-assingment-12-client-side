import { Card, Typography, List } from "@material-tailwind/react";
import EmployeeMenu from "./EmployeeMenu";
import AdminMenu from "./AdminMenu";
import NormalMenu from "../../../components/Home/Navbar/NormalMenu";
import useSingleUser from "../../../hooks/useSingleUser";

export function DefaultSidebar() {
  const user = useSingleUser();
  return (
    <Card className="h-screen p-4 shadow-xl shadow-blue-gray-500">
      <div className="mb-2 p-4 space-y-4">
        <img
          className="h-16 w-16 rounded-full border border-green-200 shadow-lg"
          src={user?.logo}
          alt=""
        />
        <Typography variant="h5" color="blue-gray">
          {user?.name}
        </Typography>
      </div>
      <List>
        {user.role === "employee" ? (
          <EmployeeMenu />
        ) : user.role === "admin" ? (
          <AdminMenu />
        ) : (
          <NormalMenu />
        )}
      </List>
    </Card>
  );
}
