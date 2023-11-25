import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
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
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        My Employee List
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
        Add an employee
      </NavLink>
      <NavLink
        to={"/dashboard/admin-asset-list"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Assets List
      </NavLink>
      <NavLink
        to={"/dashboard/admin-add-asset"}
        className={({ isActive }) =>
          isActive
            ? "flex gap-2 items-center bg-black text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
            : "text-black flex gap-2 items-center hover:bg-black hover:text-white transition-all duration-300 px-3 py-1 rounded-md font-medium"
        }
      >
        <FaHome />
        Add an Asset
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
        All Request
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
        Custom Request List
      </NavLink>
    </>
  );
};

export default AdminMenu;
