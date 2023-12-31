import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../components/common/Loading/Spinner";
import useAuth from "../hooks/useAuth";
import useSingleUser from "../hooks/useSingleUser";

const AdminRoute = ({ children }) => {
  const userDB = useSingleUser();
  console.log(userDB);
  const payment = userDB?.payment;
  const { user, loading } = useAuth();
  // if (loading) {
  //   return <Spinner />;
  // }
  if (Object.keys(userDB).length == 0 || loading) {
    return <Spinner />;
  }
  if (payment && user) {
    return children;
  }
  return <Navigate to="/payment" replace />;
};

export default AdminRoute;
