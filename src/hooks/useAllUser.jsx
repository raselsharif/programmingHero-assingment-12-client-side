import { useEffect, useState } from "react";
import usePublicAPI from "./usePublicAPI";

const useAllUser = () => {
  const [allUser, setAllUser] = useState([]);
  const publicAPI = usePublicAPI();
  useEffect(() => {
    publicAPI.get(`/users`).then((res) => {
      setAllUser(res.data);
    });
  }, [publicAPI]);
  return allUser;
};

export default useAllUser;
