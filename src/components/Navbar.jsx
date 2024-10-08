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
  // {
  //   path: "/faq",
  //   name: "FAQ",
  // },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative w-full flex flex-col md:flex-row md:items-center md:justify-around text-white'>
      <div
        onClick={() => setOpen(!open)}
        className='absolute top-4 right-4 md:hidden text-white z-20'>
        {open ? <XIcon /> : <MenuIcon />}
      </div>
      <h1 className='p-4 md:p-0 font-afacad-flux font-extralight text-2xl md:text-4xl'>
        Navisights
      </h1>
      <div
        className={`w-full md:w-auto z-10 ${
          open ? "flex flex-col bg-background" : "hidden"
        } absolute md:relative md:flex md:flex-row px-4 py-8 md:justify-center gap-2 md:gap-4 font-raleway text-sm md:text-xl md:bg-black text-white`}>
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
