import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <p>Loading.....</p>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoutes;
