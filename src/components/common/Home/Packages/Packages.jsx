import SectionHeader from "../../SectionHeader/SectionHeader";
import { PricingCard } from "./PackageCard";

const Packages = () => {
  return (
    <div className="mt-20">
      <SectionHeader subHeading={"packages"} heading={"our packages"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
};

export default Packages;
