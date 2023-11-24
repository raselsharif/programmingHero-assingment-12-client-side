import {
    Card,
    Typography,
    List,
  } from "@material-tailwind/react";
import EmployeeMenu from "./EmployeeMenu";
import AdminMenu from "./AdminMenu";
import NormalMenu from "./NormalMenu";
   
  export function DefaultSidebar() {
    const user = ''
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div>
        <List>
          {user === "employee" ?  <EmployeeMenu/> : user === "admin" ? <AdminMenu/> : <NormalMenu/>}
        </List>
      </Card>
    );
  }