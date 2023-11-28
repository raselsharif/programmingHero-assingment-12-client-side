import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import useAllAsset from "../../../../hooks/useAllAsset";
import useSingleUser from "../../../../hooks/useSingleUser";
import { useEffect, useState } from "react";
const TABLE_HEAD = [
  "#",
  "Name",
  "Type",
  "Request Date",
  "Approval Date",
  "Request Status",
  "Action",
];
const AssetsEmployee = ({ children }) => {
  const assets = useAllAsset();
  const user = useSingleUser();
  const [myAssets, setMyAssets] = useState([]);
  console.log(myAssets);
  useEffect(() => {
    const myAssetsFiltered = assets.filter(
      (asset) => user.email === asset.requested_by
    );
    setMyAssets(myAssetsFiltered);
  }, [assets, user.email]);
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
              {myAssets.map(
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
                        className={
                          status === "pending"
                            ? "text-red-500 capitalize"
                            : "text-green-500 capitalize"
                        }
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
