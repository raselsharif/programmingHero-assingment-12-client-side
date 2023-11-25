import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
const TABLE_HEAD = [
  "#",
  "Name",
  "Type",
  "Quantity",
  "Added Date",
  "Action",
  "Action",
];
const TABLE_ROWS = [
  {
    name: "watch",
    type: "non-returnable",
    quantity: "10",
    added_date: "24/04/18",
  },
  {
    name: "watch",
    type: "non-returnable",
    quantity: "10",
    added_date: "24/04/18",
  },
];

const AdminAssetList = ({ children }) => {
  return (
    <div>
      <SectionHeader heading={"My Assets"} />
      <div className="mt-10  flex flex-wrap justify-center gap-5">
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
        <div>
          <Select color="gray" variant="standard" label="Sort by quantity">
            <Option>Heigh to Low</Option>
            <Option>Low to Heigh</Option>
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
              {TABLE_ROWS.map(({ name, type, quantity, added_date }, index) => (
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
                      {name}
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
                      {quantity}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {added_date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Button color="green" variant="gradient">
                      Update
                    </Button>
                  </td>
                  <td className="p-4">
                    <Button color="red" variant="gradient">
                      Delete
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

export default AdminAssetList;
