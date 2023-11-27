import { useEffect, useState } from "react";
import useAllUser from "../../../../hooks/useAllUser";
import TeamMemberCard from "./TeamMemberCard";
import useSingleUser from "../../../../hooks/useSingleUser";
const TeamList = () => {
  const users = useAllUser();
  const user = useSingleUser();
  const [myTeam, setMyteam] = useState([]);
  console.log(myTeam);
  useEffect(() => {
    const teamFiltered = users.filter((team) => team?.workAt === user?.workAt);
    setMyteam(teamFiltered);
  }, [users, user?.workAt]);
  return (
    <div>
      <h2 className="text-center mt-10 text-white text-xl rounded-md py-3 font-bold bg-blue-gray-300">
        Team Members
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {myTeam?.map((team) => (
          <TeamMemberCard key={team._id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
