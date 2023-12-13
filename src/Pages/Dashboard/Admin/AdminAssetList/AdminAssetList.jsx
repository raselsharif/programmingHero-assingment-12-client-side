import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import {
  Button,
  Card,
  Input,
  MenuItem,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import useSecureApi from "../../../../hooks/useSecureApi";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
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
  const [type, setType] = useState("");
  // console.log(type);
  // console.log(assets);
  const handleType = (e) => {
    // setType(e.target.value);
    console.log(e.target.value);
  };
  const secureAPI = useSecureApi();
  useEffect(() => {
    secureAPI.get(`/assets`).then((res) => setAssets(res.data));
  }, [secureAPI]);
  const assetDeleteHandler = (id) => {
    // console.log(id);
    secureAPI.delete(`/asset-delete/${id}`).then(() => {
      toast.success("Deleted successfully");
    });
  };
  const handleSearchName = (e) => {
    console.log(e.target.value);
  };
  const handlePending = (e) => {
    console.log(e);
  };
  return (
    <div>
      <SectionHeader heading={"My Assets"} />
      <div className="mt-10  flex flex-wrap justify-center gap-5">
        <div>
          <Input
            onChange={handleSearchName}
            variant="standard"
            label="Search By Name"
          />
        </div>
        <div>
          <Select
            onChange={handlePending}
            color="gray"
            variant="standard"
            label="Pending/Approved"
          >
            <Option value="pending">Pending</Option>
            <Option value="approved">Approved</Option>
          </Select>
        </div>
        <div>
          <Select
            color="gray"
            variant="standard"
            label="Returnable/non-returnable"
            onChange={handleType}
          >
            <MenuItem value="returnable">Returnable</MenuItem>
            <MenuItem value="non-returnable">Non-returnable</MenuItem>
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
                      <Link to={`/dashboard/asset-update/${_id}`}>
                        <Button color="green" variant="gradient">
                          Update
                        </Button>
                      </Link>
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
