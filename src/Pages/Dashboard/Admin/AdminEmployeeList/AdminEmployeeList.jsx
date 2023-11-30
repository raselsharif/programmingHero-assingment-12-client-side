import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import useSecureApi from "../../../../hooks/useSecureApi";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const TABLE_HEAD = ["#", "image", "Emp. Name", "Type", "Action"];

const AdminEmployeeList = () => {
  const { user } = useAuth();
  const [employees, setEmployees] = useState([]);
  // console.log(employees);
  const secureAPI = useSecureApi();
  useEffect(() => {
    secureAPI(`/employee/${user?.email}`).then((res) => setEmployees(res.data));
  }, [secureAPI, user?.email]);
  const handleRemoveEmployee = (id) => {
    // console.log(id);
    const userInfo = {
      workAt: null,
      team: false,
    };
    secureAPI.put(`/add-remove-team/${id}`, userInfo).then(() => {
      toast.success("Removed to team successfully");
      location.reload();
    });
  };
  return (
    <div>
      <SectionHeader heading={"My Employees"} />
      <div className="mt-10  flex flex-wrap justify-center gap-5">
        <div>
          <Input variant="standard" label="Search By Name" />
        </div>
        <div>
          <Input variant="standard" label="Search By Email" />
        </div>
      </div>
      <div className="mt-10">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees.map(({ image, name, role, _id }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal capitalize"
                    >
                      <img
                        className="w-14 h-14 rounded-full border border-green-200"
                        src={
                          image
                            ? image
                            : "https://pipilikasoft.com/wp-content/uploads/2018/08/demo.jpg"
                        }
                        alt="employee image"
                      />
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal capitalize"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {role}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Button
                      onClick={() => handleRemoveEmployee(_id)}
                      color="red"
                      variant="gradient"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AdminEmployeeList;
