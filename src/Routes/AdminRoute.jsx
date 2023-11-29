import { useNavigate } from "react-router-dom";
import Spinner from "../components/common/Loading/Spinner";
import useAuth from "../hooks/useAuth";
import useSingleUser from "../hooks/useSingleUser";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const userDB = useSingleUser();
  const payment = userDB?.payment;
  const navigate = useNavigate();
  if (loading) {
    return <Spinner />;
  }
  if (payment && user) {
    return children;
  }
  return navigate("/payment");
};

export default AdminRoute;
