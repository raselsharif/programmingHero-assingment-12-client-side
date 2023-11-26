import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import usePublicAPI from "./usePublicAPI";

const useSingleUser = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  const [singleUser, setSingleUser] = useState({});
  console.log(singleUser);
  const publicAPI = usePublicAPI();
  useEffect(() => {
    publicAPI.get(`/user/${userEmail}`).then((res) => {
      setSingleUser(res.data);
    });
  }, []);
  return singleUser;
};

export default useSingleUser;
