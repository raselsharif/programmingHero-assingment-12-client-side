import { Card, Typography, List } from "@material-tailwind/react";
import EmployeeMenu from "./EmployeeMenu";
import AdminMenu from "./AdminMenu";
import NormalMenu from "../../../components/Home/Navbar/NormalMenu";

export function DefaultSidebar() {
  const user = "employee";
  return (
    <Card className="h-[calc(100vh-2rem)] w-full p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        {user === "employee" ? (
          <EmployeeMenu />
        ) : user === "admin" ? (
          <AdminMenu />
        ) : (
          <NormalMenu />
        )}
      </List>
    </Card>
  );
}
