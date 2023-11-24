import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
const TABLE_HEAD = [
  "#",
  "Name",
  "Type",
  "Request Date",
  "Approval Date",
  "Request Status",
  "Action",
];
const TABLE_ROWS = [
  {
    name: "watch",
    type: "non-returnable",
    request_date: "23/04/18",
    approved_date: "24/04/18",
    status: "pending",
  },
  {
    name: "watch",
    type: "returnable",
    request_date: "23/04/18",
    approved_date: "24/04/18",
    status: "approved",
  },
];
const AssetsEmployee = ({ children }) => {
  return (
    <div>
      <SectionHeader heading={"My Assets"} />
      <div className="mt-10  flex justify-center gap-5">
        <div>
          <Input variant="standard" label="Search By Name" />
        </div>
        <div>
          <Select color="gray" variant="standard" label="Pending/Approved">
            <Option>Pending</Option>
            <Option>Approved</Option>
          </Select>
        </div>
        <div>
          <Select
            color="gray"
            variant="standard"
            label="Returnable/non-returnable"
          >
            <Option>Returnable</Option>
            <Option>Non-returnable</Option>
          </Select>
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
                  { name, type, request_date, approved_date, status },
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
                        className="font-normal"
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
                        {type}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {request_date}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {status === "pending" ? "" : approved_date}
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
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {status === "pending" ? (
                          <Button>Cancel</Button>
                        ) : status === "approved" && type === "returnable" ? (
                          <Button>Return</Button>
                        ) : status === "approved" ? (
                          <Button>Print</Button>
                        ) : (
                          <Button disabled>disabled</Button>
                        )}
                      </Typography>
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

export default AssetsEmployee;
