import { Card, Typography, List } from "@material-tailwind/react";
import EmployeeMenu from "./EmployeeMenu";
import AdminMenu from "./AdminMenu";
import NormalMenu from "../../../components/Home/Navbar/NormalMenu";
import useSingleUser from "../../../hooks/useSingleUser";

export function DefaultSidebar() {
  const user = useSingleUser();
  return (
    <Card className="h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
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
