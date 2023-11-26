import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import useSecureApi from "../../../../hooks/useSecureApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const TABLE_HEAD = [
  "#",
  "Name",
  "Type",
  "Quantity",
  "Added Date",
  "Edit",
  "Delete",
];
const AdminAssetList = ({ children }) => {
  const [assets, setAssets] = useState([]);
  console.log(assets);
  const secureAPI = useSecureApi();
  useEffect(() => {
    secureAPI.get("/assets").then((res) => setAssets(res.data));
  }, [secureAPI]);
  const assetDeleteHandler = (id) => {
    console.log(id);
    secureAPI.delete(`/asset-delete/${id}`).then(() => {
      toast.success("Deleted successfully");
    });
  };
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
              {assets?.map(
                ({ _id, name, type, quantity, added_date }, index) => (
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
                      <Button
                        onClick={() => assetDeleteHandler(_id)}
                        color="red"
                        variant="gradient"
                      >
                        Delete
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

export default AdminAssetList;
