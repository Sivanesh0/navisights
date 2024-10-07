import React from 'react'
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className='relative text-white bg-black'>
      {/* About Startup */}
      <section className='md:w-2/3 mx-auto space-y-4 px-4 text-justify md:text-left md:px-0 py-16'>
        <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
          About Navisights
        </h1>
        <p className='font-cormorant-garamond text-xl'>
          We are Team Navisights, a dynamic group of innovators passionate about
          solving real-world mobility challenges through cutting-edge
          technology. Our team combines autonomous systems, electric vehicles,
          and software development expertise to create impactful solutions that
          enhance accessibility and promote sustainability. We are dedicated to
          pushing the boundaries of autonomous driving and electric mobility
          with a strong focus on user-centric design, safety, and efficiency.
        </p>
      </section>
      {/* Vision and Aim */}
      <section className='bg-[url("/classy-fabric.png")] bg-purple-700 text-white'>
        <div className='py-16 px-4 text-justify md:text-left md:px-0 bg-gradient-to-r from-purple-900/75 to-dark-maroon/75'>
          <div className='md:w-2/3 mx-auto space-y-4'>
            <h1 className='text-5xl font-semibold font-afacad-flux text-white'>
              Our Vision And Aim
            </h1>
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
          </div>
        </div>
      </section>
      {/* Our Product */}
      <section className='py-16 px-4 text-justify md:text-left md:px-0 bg-[url("/black-grid-texture.png")]'>
        <div className='md:w-2/3 mx-auto space-y-4'>
          <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
            Our Product
          </h1>
          <p className='font-cormorant-garamond text-xl'>
            The NextGen Trike by Team Navi is an autonomous electric vehicle
            designed to improve mobility in closed ecosystems such as hospitals,
            campuses, and industrial facilities. It combines advanced autonomous
            technologies like automated navigation, pathfinding, and voice
            control, offering a safe, efficient, and eco-friendly solution.
            Focused on accessibility, the NextGen Trike enhances transportation
            for disabled and hospitalized individuals along with autonomous
            transportation within a closed environment, while contributing to
            sustainable and green mobility.
          </p>
          <button
            onClick={() => {
              navigate("/product");
            }}
            className='px-4 py-2 text-lg rounded-md font-semibold font-afacad-flux border hover:bg-gradient-to-tr from-purple-800 to-maroon transition-all duration-300 ease-in'>
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services