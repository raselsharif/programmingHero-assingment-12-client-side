import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import { ChevronDownIcon, Bars2Icon } from "@heroicons/react/24/solid";
import NormalMenu from "./NormalMenu";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = (
  <>
    <Link to={"/dashboard"}>Dashboard</Link>
    <Link>Log out</Link>
  </>
);

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
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
        {profileMenuItems}
      </MenuList>
    </Menu>
  );
}

function NavList() {
  const user = false;
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 xl:flex-row xl:items-center">
      {!user ? <NormalMenu /> : ""}
    </ul>
  );
}

export function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const user = false;
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-2xl p-2 xl:rounded-full xl:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          logo
        </Typography>
        <div className="hidden xl:block">
          <NavList />
        </div>
        {user ? (
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
      <MobileNav open={isNavOpen}>
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
