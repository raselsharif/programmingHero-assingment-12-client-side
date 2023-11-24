import SectionHeader from "../../../../components/common/SectionHeader/SectionHeader";
import TeamList from "./TeamList";
import UpcomingEvent from "./UpcomingEvent";

const MyTeam = () => {
  return (
    <div>
      <SectionHeader heading={"My team"}></SectionHeader>
      <div>
        <UpcomingEvent />
        <TeamList />
      </div>
    </div>
  );
};

export default MyTeam;
