import Spinner from "../components/common/Loading/Spinner";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoutes;
