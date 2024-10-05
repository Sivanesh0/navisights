import React from "react";
import { Link, NavLink } from "react-router-dom";

export const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/product",
    name: "Product",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/achievements",
    name: "Achievements",
  },
  {
    path: "/faq",
    name: "FAQ",
  },
];

const Navbar = () => {
  return (
    <div className='px-4 py-8 flex flex-col md:flex-row justify-center gap-4 font-raleway text-xl bg-background text-white'>
      {links.map((link, index) => (
        <NavLink
          className={({ isActive }) =>
            `hover:text-transparent ${
              isActive && "text-transparent"
            } bg-gradient-to-tr from-purple-800 to-red bg-clip-text transition-all duration-150 ease-in`
          }
          key={index}
          to={link.path}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
