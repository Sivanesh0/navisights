import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative bg-transparent h-[80vh] overflow-hidden w-full text-white font-raleway'>
        <h1 className='absolute top-1/3 left-1/2 -translate-x-1/2 text-5xl md:text-6xl leading-tight font-semibold md:font-normal text-center drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]'>
          Welcome to the Future of{" "}
          <span className='text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text font-black md:font-bold'>
            Autonomous EVs
          </span>
        </h1>
      </div>
      {/* Quote */}
      <div className='text-center font-raleway text-2xl py-32 bg-[url("/black-texture.png")] bg-black text-white'>
        <blockquote className='text-balance px-6 md:px-0'>
          Explore the Future of Transportation with{" "}
          <span className='text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text font-bold'>
            Electric Vehicles
          </span>{" "}
          and{" "}
          <span className='text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text font-bold'>
            Artificial Intelligence
          </span>{" "}
          <br />
          When EV and AI combine, the empowerment of all is assured.
        </blockquote>
      </div>
      {/* Vision and Aim */}
      <div className='text-center font-raleway text-2xl py-16 bg-gradient-to-b from-black to-background text-white space-y-6'>
        <h1 className='text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
          Our Vision And Aim
        </h1>
        <hr className='w-[70%] md:w-1/3 mx-auto' />
        <p className='w-[85%] text-left md:text-center md:text-balance font-afacad-flux md:text-2xl md:w-2/3 mx-auto'>
          To pioneer a world where mobility knows no bounds, where every journey
          is a gateway to boundless independence and empowerment.
        </p>
        <hr className='w-[70%] md:w-1/3 mx-auto' />
        <p className='w-[85%] text-left md:text-center md:text-balance font-afacad-flux md:text-2xl md:w-2/3 mx-auto'>
          At S&S Navisights, we're committed to revolutionizing mobility
          solutions for all. Our mission is to ignite innovation, craft
          cutting-edge technologies, and foster inclusive environments, enabling
          seamless navigation and transforming lives worldwide. "Gateway to
          boundless independence and empowerment."
        </p>
      </div>
    </div>
  );
};

export default Home;
