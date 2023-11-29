import { useEffect, useState } from "react";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import useSingleUser from "../../../hooks/useSingleUser";
import useAllAsset from "../../../hooks/useAllAsset";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const PendingAdmin = () => {
  const user = useSingleUser();
  const [assets, setAssets] = useState([]);
  // console.log(assets);
  const allAsset = useAllAsset();
  useEffect(() => {
    const myAssets = allAsset.filter(
      (asset) => user.email === asset.owner && asset.status === "pending"
    );
    setAssets(myAssets);
  }, [allAsset, user.email]);
  return (
    <div className="mt-20">
      <SectionHeader heading={"My Pending Request"} />
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {assets?.slice(0, 5).map((asset) => (
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

export default PendingAdmin;
