import { Button } from "@material-tailwind/react";
import {
  FaBook,
  FaHome,
  FaPen,
  FaTeamspeak,
  FaUser,
  FaUsers,
  FaWonSign,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const EmployeeMenu = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Home
      </NavLink>
      <NavLink
        to={"/dashboard/my-team"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaUsers />
        My Team
      </NavLink>
      <NavLink
        to={"/dashboard/assets-employee"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaPen />
        My Assets
      </NavLink>
      <NavLink
        to={"/dashboard/request-assets"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaBook />
        Request for an Asset
      </NavLink>
      <NavLink
        to={"/dashboard/request-custom"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaWonSign />
        Make a Custom Request
      </NavLink>
      <div className="absolute bottom-10 w-3/4 space-y-2">
        {/* absolute bottom-10 w-3/4 */}
        <NavLink
          to={"/dashboard/employee-profile"}
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
              : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium "
          }
        >
          <FaUser />
          Profile
        </NavLink>
        <Button color="red" variant="gradient">
          Log Out
        </Button>
      </div>
    </>
  );
};

export default EmployeeMenu;
