import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";
import MonthlyRequest from "./MonthlyRequest";
import MyCustomRequest from "./MyCustomRequest";
import MyPending from "./MyPending";

const HomeEmployee = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl text-green-500">
        Employee Home Page
      </h2>
      <MyCustomRequest />
      <MyPending />
      <MonthlyRequest />
      <div className="mt-10">
        <SectionHeader heading={"Frequently Requested Item"} />
        <div className="text-center">Monthly Request item will be here</div>
      </div>
    </div>
  );
};

export default HomeEmployee;
