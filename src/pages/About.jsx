import React from "react";
import ScrollFx from "../components/ScrollAnimationComponent";

const team = [
  {
    image: "/sivanesh.jpg",
    title: "Sivanesh K S",
    description: "CEO & Co-Founder",
  },
  {
    image: "/surya.jpg",
    title: "Surya A",
    description: "CMO & Co-Founder",
  },
  {
    image: "/naren.jpg",
    title: "Naren Kumar S S",
    description: "CMO & Co-Founder",
  },
  {
    image: "/bharat.jpg",
    title: "M Barath Kumar",
    description: "CIO",
  },
];

const mentors = [
  {
    image: "/dr-nithya.jpg",
    title: "Dr. M. Nithya",
    description: "HOD M.Tech CSE, Sri Sairam Engineering College",
  },
  {
    image: "/dr-sharmeela.jpg",
    title: "Dr. C. Sharmeela",
    description: "Professor, Anna University",
  },
  {
    image: "/aditya-vishwanath.jpg",
    title: "Mr. Aditya Vishwanath",
    description: "Co-Founder & CEO, Inspirit, Makerghat",
  },
  {
    image: "/gopi-raja.jpg",
    title: "Gopi Raja",
    description: "Founder TShell Motors",
  },
];

const About = () => {
  return (
    <div>
      {/* Team */}
      <div className='relative text-white bg-black bg-[url("/black-texture.png")] py-16'>
        <section className='md:w-[75%] px-4 mx-auto space-y-6'>
          <h1 className='text-5xl font-afacad-flux'>Our Team</h1>
          <hr className='border-dashed' />
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {team.map((member, index) => (
              <ScrollFx duration={1 + (index + 3) / 10} key={index}>
                <div
                  className={`flex flex-col justify-center items-center text-center`}>
                  <img
                    className='size-56 rounded-full mx-auto object-cover'
                    src={member.image}
                    alt={member.title}
                  />
                  <h2 className='text-xl font-raleway font-bold'>
                    {member.title}
                  </h2>
                  <p className='font-cormorant-garamond'>
                    {member.description}
                  </p>
                </div>
              </ScrollFx>
            ))}
          </div>
        </section>
      </div>
      {/* Mentors */}
      <div className='relative text-white bg-black bg-[url("/black-texture.png")] py-16'>
        <section className='md:w-[75%] px-4 mx-auto space-y-6'>
          <h1 className='text-5xl font-afacad-flux'>Our Mentors</h1>
          <hr className='border-dashed' />
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {mentors.map((mentor, index) => (
              <ScrollFx duration={1 + (index + 3) / 10} key={index}>
                <div
                  className={`flex flex-col justify-center items-center text-center`}>
                  <img
                    className='size-56 rounded-full mx-auto object-cover'
                    src={mentor.image}
                    alt={mentor.title}
                  />
                  <h2 className='text-xl font-raleway font-bold'>
                    {mentor.title}
                  </h2>
                  <p className='font-cormorant-garamond'>
                    {mentor.description}
                  </p>
                </div>
              </ScrollFx>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
