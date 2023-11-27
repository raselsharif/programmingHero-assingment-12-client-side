import { useEffect, useState } from "react";
import useSecureApi from "./useSecureApi";

const useAllAsset = () => {
  const secureAPI = useSecureApi();
  const [assets, setAssets] = useState([]);
  useEffect(() => {
    secureAPI.get("/assets").then((res) => {
      setAssets(res.data);
    });
  }, [secureAPI]);
  return assets;
};

export default useAllAsset;
