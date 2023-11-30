import { useNavigate } from "react-router-dom";
import Spinner from "../components/common/Loading/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return navigate("/");
};

export default PrivateRoutes;
