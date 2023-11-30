import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://asset-management-server-three.vercel.app",
  // withCredentials: true,
});
const usePublicAPI = () => {
  return axiosPublic;
};

export default usePublicAPI;
