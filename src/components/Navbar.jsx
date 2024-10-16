import {
  BoxIcon,
  HouseIcon,
  InfoIcon,
  HeartHandshakeIcon,
  AwardIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const links = [
  {
    path: "/",
    name: "Home",
    icon: <HouseIcon strokeWidth={1} />,
  },
  {
    path: "/services",
    name: "Services",
    icon: <HeartHandshakeIcon strokeWidth={1} />,
  },
  {
    path: "/product",
    name: "Product",
    icon: <BoxIcon strokeWidth={1} />,
  },
  {
    path: "/about",
    name: "About",
    icon: <InfoIcon strokeWidth={1} />,
  },
  {
    path: "/achievements",
    name: "Achievements",
    icon: <AwardIcon strokeWidth={1} />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='sticky top-0 bg-black/50 z-30 w-full flex flex-col md:flex-row md:items-center md:justify-around text-white'>
      <div
        onClick={() => setOpen(!open)}
        className='absolute top-4 right-4 md:hidden text-white z-30'>
        {open ? <XIcon /> : <MenuIcon />}
      </div>
      <div className='p-4'>
        <img src='/logo.png' className='w-1/2 md:w-40' alt='Navisights' />
      </div>
      <div
        className={`w-full md:w-auto z-20 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } absolute md:relative md:flex md:flex-row px-4 py-8 md:justify-center space-y-2 md:gap-4 font-raleway text-sm md:text-xl md:bg-black text-white bg-background`}>
        {links.map((link, index) => (
          <NavLink
            className={({ isActive }) =>
              `hover:text-transparent hover:font-bold flex items-center gap-4 ${
                isActive && "text-transparent font-bold"
              } bg-gradient-to-tr from-purple-800 to-red bg-clip-text transition-all duration-150 ease-in`
            }
            onClick={() => setOpen(false)}
            key={index}
            to={link.path}>
            <span className='text-white md:hidden'>{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
