import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NormalMenu = () => {
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
        to={"/join-employee"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Join as Employee
      </NavLink>
      <NavLink
        to={"/join-admin"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Join as HR/Admin
      </NavLink>
    </>
  );
};

export default NormalMenu;
