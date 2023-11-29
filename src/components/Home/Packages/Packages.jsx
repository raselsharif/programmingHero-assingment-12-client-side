import SectionHeader from "../../common/SectionHeader/SectionHeader";
import { PricingCard } from "./PackageCard";

const Packages = () => {
  return (
    <div className="mt-20">
      <SectionHeader subHeading={"packages"} heading={"our packages"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <PricingCard price={"5"} name={"basic"} employee={"5 Employees"} />
        <PricingCard price={"8"} name={"standard"} employee={"10 Employees"} />
        <PricingCard price={"15"} name={"premium"} employee={"20 Employees"} />
      </div>
    </div>
  );
};

export default Packages;
