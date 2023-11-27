import { Link } from "react-router-dom";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { Button, Card, Checkbox, Typography } from "@material-tailwind/react";
import useAllUser from "../../../../hooks/useAllUser";
const TABLE_HEAD = ["", "#", "image", "Emp. Name", "Type", "Action"];

const AdminAddEmployee = () => {
  const users = useAllUser();
  console.log(users);
  return (
    <div>
      <SectionHeader heading={"Add an Employee"} />
      <div className="flex justify-center flex-wrap gap-5 items-center mt-10">
        <Typography
          color="blue-gray"
          className="border py-2 px-3 rounded-md border-gray-300"
          variant="h5"
        >
          My Employees: 5
        </Typography>
        <Typography
          color="blue-gray"
          className="border py-2 px-3 rounded-md border-gray-300"
          variant="h5"
        >
          My Limit: 5
        </Typography>
        <Link to={"/packages"}>
          <Button color="green" variant="gradient">
            Limit Increase
          </Button>
        </Link>
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
              {users?.map(({ image, name, role }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Checkbox />
                    </Typography>
                  </td>
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
                      <img src={image} alt="employee image" />
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
                    <Button color="green" variant="gradient">
                      Add to Team
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

export default AdminAddEmployee;
