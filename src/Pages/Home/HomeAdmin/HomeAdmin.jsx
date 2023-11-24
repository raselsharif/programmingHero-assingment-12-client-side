import SectionHeader from "../../../components/common/SectionHeader/SectionHeader";

const HomeAdmin = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl text-green-500">Admin Home Page</h2>
      <div className="mt-10">
        <SectionHeader heading={"Pending Request"} />
        <div>
          <h2 className="text-center">max 5 pending Request will be here</h2>
        </div>
      </div>
      <div className="mt-10">
        <SectionHeader heading={"Most Requested Items"} />
        <div>
          <h2 className="text-center">Most Requested Items will be here</h2>
        </div>
      </div>
      <div className="mt-10">
        <SectionHeader heading={"Limited stock item"} />
        <div>
          <h2 className="text-center">
            Limited stock item (quantity less than 10) will be here
          </h2>
        </div>
      </div>

      <div className="mt-10">
        <SectionHeader heading={"PI Chart"} />
        <div>
          <h2 className="text-center">
            returnable and non-returnable item will be here
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
