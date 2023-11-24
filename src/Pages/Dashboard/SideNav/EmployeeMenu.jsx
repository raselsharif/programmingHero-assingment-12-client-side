import { FaHome } from "react-icons/fa";
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
        to={"/assets-employee"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
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
        <FaHome />
        My Assets
      </NavLink>
      <NavLink
        to={"/join-employee"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Request for an Asset
      </NavLink>
      <NavLink
        to={"/join-employee"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Make a Custom Request
      </NavLink>
    </>
  );
};

export default EmployeeMenu;
