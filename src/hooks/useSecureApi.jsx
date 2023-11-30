import axios from "axios";

const secureApi = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://asset-management-server-three.vercel.app",
});
const useSecureApi = () => {
  return secureApi;
};

export default useSecureApi;
