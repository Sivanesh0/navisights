import React from "react";
import { Link } from "react-router-dom";
import {
  MailIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  BoxIcon,
  HouseIcon,
  InfoIcon,
  HeartHandshakeIcon,
  AwardIcon,
  MenuIcon,
  XIcon,
  UserRoundPlusIcon,
  LogInIcon,
  LayoutDashboardIcon,
} from "lucide-react";

const Footer = () => {
  const socials = [
    {
      link: "mailto:navisights2023@gmail.com",
      name: "Email",
      icon: <MailIcon strokeWidth={1} />,
    },
    {
      link: "tel:+919080168075",
      name: "Phone",
      icon: <PhoneIcon strokeWidth={1} />,
    },
    {
      link: "https://www.facebook.com",
      name: "Facebook",
      icon: <FacebookIcon strokeWidth={1} />,
    },
    {
      link: "https://www.linkedin.com/in/sivanesh-k-s-6a9991218/",
      name: "LinkedIn",
      icon: <LinkedinIcon strokeWidth={1} />,
    },
    {
      link: "https://www.instagram.com/navisights/",
      name: "Instagram",
      icon: <InstagramIcon strokeWidth={1} />,
    },
    {
      link: "https://www.youtube.com/watch?v=QjQQ6QvxTto",
      name: "Youtube",
      icon: <YoutubeIcon strokeWidth={1} />,
    },
  ];
  const links = [
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='bg-gradient-to-tr from-purple-900 to-dark-maroon text-white px-3 py-7 flex flex-col md:flex-row gap-8 justify-around font-raleway'>
      <div className='space-y-4 text-center md:text-left place-self-center'>
        <img src='/logo.png' className='w-44 mx-auto' alt='Navisights' />
        <h1 className='text-sm'>Copyrights 2024 © All rights reserved.</h1>
      </div>
      <div className='flex justify-around md:w-1/2'>
        <div className='flex flex-col gap-3'>
          {links.map((link, index) => (
            <Link
              className='hover:underline underline-offset-2 flex items-center gap-4'
              key={index}
              to={link.path}
              onClick={scrollToTop}>
              <div className='hidden md:block'>{link.icon}</div>
              {link.name}
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-3'>
          {socials.map((link, index) => (
            <a
              className='flex items-center gap-4'
              key={index}
              href={link.link}
              target='_blank'>
              <div className='hidden md:block'>{link.icon}</div>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
