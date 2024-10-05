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
    <div className="p-4 flex justify-center gap-4">
      {links.map((link, index) => (
        <Link key={index} to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
