import useSingleUser from "../../../hooks/useSingleUser";
import FrequentRequest from "./FrequentRequest";
import MonthlyRequest from "./MonthlyRequest";
import MyCustomRequest from "./MyCustomRequest";
import MyPending from "./MyPending";

const HomeEmployee = () => {
  // const user = useSingleUser();
  // console.log(user);
  return (
    <div className="mt-10">
      <h2 className="text-center text-3xl text-green-500">
        Employee Home Page
      </h2>
      <MyCustomRequest />
      <MyPending />
      <MonthlyRequest />
      <FrequentRequest />
    </div>
  );
};

export default HomeEmployee;
