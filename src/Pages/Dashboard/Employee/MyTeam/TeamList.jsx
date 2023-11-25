import TeamMemberCard from "./TeamMemberCard";

const TeamList = () => {
  return (
    <div>
      <h2 className="text-center mt-10 text-white text-xl rounded-md py-3 font-bold bg-blue-gray-300">
        Team Members
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <TeamMemberCard />
        <TeamMemberCard />
      </div>
    </div>
  );
};

export default TeamList;
