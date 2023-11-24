import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

const HomeEmployee = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl text-green-500">
        Normal Employee Home Page
      </h2>
      <SectionHeader heading={"My Custom Request"} />
      <div className="text-center">Custom Request item will be here</div>
      <div className="mt-10">
        <SectionHeader heading={"My Pending Request"} />
        <div className="text-center">Pending Request item will be here</div>
      </div>
      <div className="mt-10">
        <SectionHeader heading={"My Monthly Request"} />
        <div className="text-center">Monthly Request item will be here</div>
      </div>
      <div className="mt-10">
        <SectionHeader heading={"Frequently Requested Item"} />
        <div className="text-center">Monthly Request item will be here</div>
      </div>
    </div>
  );
};

export default HomeEmployee;
