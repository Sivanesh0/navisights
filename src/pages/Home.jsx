import React from "react";
import MyParticles from "../components/MyParticles";
import ScrollAnimationComponent from "../components/ScrollAnimationComponent";
import Model from "../components/Model";

const Home = () => {
  return (
    <div className='relative'>
      {/* Hero Section */}
      <div className='relative md:px-6 grid md:grid-cols-2 items-center min-h-screen overflow-hidden w-full text-white font-raleway'>
        {/* Particles */}
        <div className='absolute w-full h-full'>
          <MyParticles />
        </div>
        <ScrollAnimationComponent duration={1.0}>
          <h1 className='md:order-2 md:w-1/2 text-5xl md:text-6xl leading-tight text-center md:text-left drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8) mx-auto'>
            Welcome to the Future of{" "}
            <span className='text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text font-bold'>
              Autonomous EVs
            </span>
          </h1>
        </ScrollAnimationComponent>
        {/* 3D Model */}
        <div className='order-first md:order-last z-10'>
          <ScrollAnimationComponent duration={1.0}>
            <Model />
          </ScrollAnimationComponent>
        </div>
      </div>

      {/* Quote */}
      <div className='text-center font-raleway text-2xl py-32 bg-[url("/black-texture.png")] bg-background text-white'>
        <ScrollAnimationComponent>
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
        </ScrollAnimationComponent>
      </div>
      {/* Vision and Aim */}
      <div className='font-raleway text-2xl px-4 text-justify md:text-left md:px-0 py-16 bg-[url("/cubes.png")] bg-black text-white'>
        <div className='md:w-2/3 mx-auto space-y-6'>
          <ScrollAnimationComponent>
            <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
              Our Vision And Aim
            </h1>
          </ScrollAnimationComponent>
          <ScrollAnimationComponent duration={1.0}>
            <p className='font-cormorant-garamond text-xl'>
              To pioneer a world where mobility knows no bounds, where every
              journey is a gateway to boundless independence and empowerment.
            </p>
            <p className='font-cormorant-garamond text-xl'>
              At S&S Navisights, we're committed to revolutionizing mobility
              solutions for all. Our mission is to ignite innovation, craft
              cutting-edge technologies, and foster inclusive environments,
              enabling seamless navigation and transforming lives worldwide.
              "Gateway to boundless independence and empowerment."
            </p>
          </ScrollAnimationComponent>
        </div>
      </div>
    </div>
  );
};

export default Home;
