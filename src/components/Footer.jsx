import React from "react";
import { Link } from "react-router-dom";
import { links } from "./Navbar";

const Footer = () => {
  const socials = [
    {
      link: "mailto:sivaneshkishore55@gmail.com",
      name: "Email",
    },
    {
      link: "tel:+919080168075",
      name: "Phone",
    },
    {
      link: "https://www.facebook.com",
      name: "Facebook",
    },
    {
      link: "https://www.instagram.com/",
      name: "Instagram",
    },
    {
      link: "https://www.youtube.com",
      name: "Youtube",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='bg-gradient-to-tr from-purple-900 to-dark-maroon text-white px-3 py-7 flex flex-col md:flex-row gap-8 justify-around font-raleway'>
      <h1 className='place-self-center'>
        Copyrights 2024. © All rights reserved.
      </h1>
      <div className='flex justify-around md:w-1/2'>
        <div className='flex flex-col gap-1'>
          {links.map((link, index) => (
            <Link
              className='hover:underline'
              key={index}
              to={link.path}
              onClick={scrollToTop}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-1'>
          {socials.map((link, index) => (
            <a key={index} href={link.link} target='_blank'>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
