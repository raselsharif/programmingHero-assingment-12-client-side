import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
const TABLE_HEAD = [
  "#",
  "Prod. Name",
  "Type",
  "Email",
  "Emp. Name",
  "Req. Date",
  "Additional Note",
  "Status",
  "Approve",
  "Reject",
];
const TABLE_ROWS = [
  {
    pro_name: "watch",
    type: "non-returnable",
    email: "rasel@mail.com",
    emp_name: "Rasel",
    req_date: "00/00/00",
    note: "lorem",
    status: "approved",
  },
];
const AdminRequestsList = () => {
  return (
    <div>
      <SectionHeader heading={"Al Request"} />
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
              {TABLE_ROWS.map(
                (
                  { pro_name, type, email, emp_name, req_date, note, status },
                  index
                ) => (
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
                        {pro_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal capitalize"
                      >
                        {type}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {emp_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {req_date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {note}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Button color="green" variant="gradient">
                        Approve
                      </Button>
                    </td>
                    <td className="p-4">
                      <Button color="red" variant="gradient">
                        Reject
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AdminRequestsList;
