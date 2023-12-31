import React from "react";
import {
  Navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars2Icon } from "@heroicons/react/24/solid";
import NormalMenu from "./NormalMenu";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useSingleUser from "../../../hooks/useSingleUser";

function ProfileMenu() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleLogOut = () => {
    console.log("log out");
    logOut()
      .then(() => {
        toast.success("Logged out");
        navigate("/");
      })
      .catch(() => {
        toast.error("Not Logged out");
      });
  };
  const singUser = useSingleUser();
  // console.log(singUser);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 "
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={
              singUser?.image
                ? singUser.image
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="flex flex-col gap-3 px-4 py-2">
        <Link
          className="hover:bg-black hover:text-white px-2 py-1 rounded-md transition-all duration-300"
          to={
            singUser?.role === "admin"
              ? "/dashboard/admin-home"
              : "/dashboard/employee-home"
          }
        >
          Dashboard
        </Link>
        <Link
          className="hover:bg-red-500 hover:text-white px-2 py-1 rounded-md transition-all duration-300 border-none outline-none"
          onClick={handleLogOut}
        >
          Log out
        </Link>
      </MenuList>
    </Menu>
  );
}

function NavList() {
  const { user } = useAuth();
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 xl:flex-row xl:items-center">
      {!user ? <NormalMenu /> : ""}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const { user } = useAuth();
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  const singUser = useSingleUser();
  // console.log(singUser);
  return (
    <Navbar className="mx-auto max-w-screen-2xl p-2 xl:rounded-full xl:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Link>
          <img
            className="h-14 w-14 rounded-full"
            src={
              singUser?.logo
                ? singUser?.logo
                : "https://png.pngtree.com/template/20210511/ourmid/pngtree-unique-polygon-logo-design-image_522806.png"
            }
            alt="logo"
          />
        </Link>
        <div className="hidden xl:block">
          <NavList />
        </div>
        {!user ? (
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 xl:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
        ) : (
          ""
        )}
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to={"/login"}>
            <Button size="sm" variant="text">
              <span>Log In</span>
            </Button>
          </Link>
        )}
      </div>
      <Collapse open={isNavOpen}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
