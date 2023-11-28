import { useEffect, useState } from "react";
import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import useAllAsset from "../../../../hooks/useAllAsset";
const TABLE_HEAD = [
  "#",
  "Prod. Name",
  "Price",
  "Type",
  "Image",
  "Why Need",
  "Additional Note",
  "Approve",
  "Reject",
];
const CustomRequestList = () => {
  const assets = useAllAsset();
  const [assetRequest, setRequestAsset] = useState([]);
  useEffect(() => {
    const filteredAsset = assets.filter(
      (asset) => asset.request_type === "custom"
    );
    setRequestAsset(filteredAsset);
  }, [assets]);
  return (
    <div>
      <SectionHeader heading={"Custom Request List"} />
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
              {assetRequest.map(
                ({ name, price, type, image, why_need, note }, index) => (
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
                        {price}
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
                        <img
                          className="h-14 w-14 rounded-full border border-green-200"
                          src={image}
                          alt="product image"
                        />
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {why_need}
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

export default CustomRequestList;
