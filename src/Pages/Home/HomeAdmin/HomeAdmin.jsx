import useSingleUser from "../../../hooks/useSingleUser";
import LimitedStock from "./LimitedStock";
import PIChart from "./PIChart";
import PendingAdmin from "./PendingAdmin";
import TopRequested from "./TopRequested";

const HomeAdmin = () => {
  const user = useSingleUser();
  console.log(user);
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl text-green-500">Admin Home Page</h2>
      <PendingAdmin />
      <TopRequested />
      <LimitedStock />
      <PIChart />
      <div className="mt-20"></div>
    </div>
  );
};

export default HomeAdmin;
