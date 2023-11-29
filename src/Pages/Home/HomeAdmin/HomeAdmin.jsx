import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import LimitedStock from "./LimitedStock";
import PIChart from "./PIChart";
import PendingAdmin from "./PendingAdmin";
import TopRequested from "./TopRequested";

const HomeAdmin = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl text-green-500">Admin Home Page</h2>
      <PendingAdmin />
      <TopRequested />
      <LimitedStock />

      <PIChart />
    </div>
  );
};

export default HomeAdmin;
