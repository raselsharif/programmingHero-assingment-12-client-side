import { useEffect, useState } from "react";
import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import useAllAsset from "../../../hooks/useAllAsset";
import useSingleUser from "../../../hooks/useSingleUser";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const MyCustomRequest = () => {
  const assets = useAllAsset();
  const user = useSingleUser();
  const [myAssets, setMyAssets] = useState([]);
  console.log(myAssets);
  useEffect(() => {
    const myAssetsFiltered = assets.filter(
      (asset) =>
        user.email === asset.requested_by && asset.request_type === "custom"
    );
    setMyAssets(myAssetsFiltered);
  }, [assets, user.email]);
  return (
    <div className="mt-20">
      <SectionHeader heading={"My Custom Request"} />
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {myAssets?.map((asset) => (
          <Card key={asset._id} className="w-full border-2">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {asset.name}
              </Typography>
              <div className="flex justify-center gap-3 flex-wrap">
                <Typography>Price: {asset.price}</Typography>
                <Typography>Type: {asset.type}</Typography>
                <Typography>Status: {asset.status}</Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="blue-gray">Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCustomRequest;
