import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
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

  return (
    <div className='px-4 py-8 flex justify-center gap-4 font-raleway text-xl bg-background text-white'>
      {links.map((link, index) => (
        <Link
          className='hover:text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text transition-all duration-150 ease-in'
          key={index}
          to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
