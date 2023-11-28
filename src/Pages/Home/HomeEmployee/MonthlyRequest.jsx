import { useEffect, useState } from "react";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import useAllAsset from "../../../hooks/useAllAsset";
import useSingleUser from "../../../hooks/useSingleUser";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const MonthlyRequest = () => {
  const assets = useAllAsset();
  const user = useSingleUser();
  const [myAssets, setMyAssets] = useState([]);
  console.log(myAssets);

  //   console.log(currentDate);
  useEffect(() => {
    const currentDate = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const myAssetsFiltered = assets.filter(
      (asset) => user.email === asset.requested_by
    );
    const filterMonth = myAssetsFiltered.filter((item) => {
      const itemDate = new Date(item.request_date);
      return itemDate >= lastMonth && itemDate <= currentDate;
    });
    const sorted = filterMonth.sort((a, b) => {
      const dateA = new Date(a.request_date);
      const dateB = new Date(b.request_date);
      return dateB - dateA;
    });

    setMyAssets(sorted);
  }, [assets, user.email]);
  return (
    <div className="mt-20">
      <SectionHeader heading={"My Last Moth Request"} />
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {myAssets?.map((asset) => (
          <Card key={asset._id} className="w-full border-2">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {asset.name}
              </Typography>
              <div className="flex justify-center gap-3 flex-wrap">
                <Typography>Type: {asset.type}</Typography>
                <Typography>Status: {asset.status}</Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MonthlyRequest;
