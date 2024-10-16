import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollFx from "../components/ScrollAnimationComponent";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className='relative text-white bg-black'>
      {/* About Startup */}
      <section className='md:w-2/3 mx-auto space-y-4 px-4 md:text-left md:px-0 py-16'>
        <ScrollFx duration={0.8}>
          <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
            About Navisights
          </h1>
        </ScrollFx>
        <ScrollFx duration={1.0}>
          <p className='font-cormorant-garamond text-xl'>
            We are Team Navisights, a dynamic group of innovators passionate
            about solving real-world mobility challenges through cutting-edge
            technology. Our team combines autonomous systems, electric vehicles,
            and software development expertise to create impactful solutions
            that enhance accessibility and promote sustainability. We are
            dedicated to pushing the boundaries of autonomous driving and
            electric mobility with a strong focus on user-centric design,
            safety, and efficiency.
          </p>
        </ScrollFx>
        <ScrollFx duration={1.2}>
          <a
            href='/msme-udyam-registration.pdf'
            target='_blank'
            className='block w-fit px-4 py-2 text-lg rounded-md font-semibold font-afacad-flux border hover:bg-gradient-to-tr from-purple-800 to-maroon transition-all duration-300 ease-in'>
            MSME Udyam Registration
          </a>
        </ScrollFx>
      </section>
      {/* Lions Club's Collaboration */}
      <section className='bg-[url("/classy-fabric.png")] bg-purple-700 text-white'>
        <div className='py-16 px-4 md:text-left md:px-0 bg-gradient-to-r from-purple-900/75 to-dark-maroon/75'>
          <div className='md:w-2/3 mx-auto space-y-4'>
            <ScrollFx duration={0.8}>
              <h1 className='text-5xl font-semibold font-afacad-flux text-white'>
                Our Collaboration with Lions Foundation for Blind
              </h1>
            </ScrollFx>
            <ScrollFx duration={1.0}>
              <p className='text-white font-cormorant-garamond text-xl'>
                At the Lions Blind Foundation, there are 17 visually impaired
                individuals, each with their own families. Mobility remains a
                significant challenge for them. When we introduced our product,
                their positive response was overwhelming. In light of this, our
                team at NaviSights has committed to supporting them on a weekly
                and monthly basis, using whatever minimal funds we have
                available.
              </p>
            </ScrollFx>
            <div className='grid md:grid-cols-2 gap-4'>
              <ScrollFx duration={1.1}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-1.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
              <ScrollFx duration={1.2}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-2.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
              <ScrollFx duration={1.3}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-3.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
              <ScrollFx duration={1.4}>
                <div className='h-32 md:h-56 rounded-md shadow-lg overflow-hidden'>
                  <img
                    className='object-cover object-center'
                    src='/achievements/lion-club-4.png'
                    alt='lion-club'
                  />
                </div>
              </ScrollFx>
            </div>
            <ScrollFx duration={1.1}>
              <div className='h-32 md:h-96 col-span-2 rounded-md shadow-lg overflow-hidden'>
                <img
                  className='object-cover w-full object-center'
                  src='/achievements/lion-club-0.png'
                  alt='lion-club'
                />
              </div>
            </ScrollFx>
            <ScrollFx duration={0.7}>
              <h1 className='text-center font-cormorant-garamond text-4xl'>
                “Together, let's help them overcome these challenges and grow.”
              </h1>
            </ScrollFx>
          </div>
        </div>
      </section>
      {/* Vision and Aim */}
      <section className='bg-[url("/classy-fabric.png")] bg-purple-700 text-white'>
        <div className='pb-16 px-4 md:text-left md:px-0 bg-gradient-to-r from-purple-900/75 to-dark-maroon/75'>
          <div className='md:w-2/3 mx-auto space-y-4'>
            <ScrollFx duration={0.8}>
              <h1 className='text-5xl font-semibold font-afacad-flux text-white'>
                Our Vision And Aim
              </h1>
            </ScrollFx>
            <ScrollFx duration={1.0}>
              <p className='font-cormorant-garamond text-xl'>
                To pioneer a world where mobility knows no bounds, where every
                journey is a gateway to boundless independence and empowerment.
              </p>
            </ScrollFx>
            <ScrollFx duration={1.2}>
              <p className='font-cormorant-garamond text-xl'>
                At S&S Navisights, we're committed to revolutionizing mobility
                solutions for all. Our mission is to ignite innovation, craft
                cutting-edge technologies, and foster inclusive environments,
                enabling seamless navigation and transforming lives worldwide.
                "Gateway to boundless independence and empowerment."
              </p>
            </ScrollFx>
          </div>
        </div>
      </section>
      {/* Our Product */}
      <section className='py-16 px-4 md:text-left md:px-0 bg-[url("/black-grid-texture.png")]'>
        <div className='md:w-2/3 mx-auto space-y-4'>
          <ScrollFx>
            <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
              Our Product
            </h1>
          </ScrollFx>
          <ScrollFx duration={1.0}>
            <p className='font-cormorant-garamond text-xl'>
              The NextGen Trike by Team Navi is an autonomous electric vehicle
              designed to improve mobility in closed ecosystems such as
              hospitals, campuses, and industrial facilities. It combines
              advanced autonomous technologies like automated navigation,
              pathfinding, and voice control, offering a safe, efficient, and
              eco-friendly solution. Focused on accessibility, the NextGen Trike
              enhances transportation for disabled and hospitalized individuals
              along with autonomous transportation within a closed environment,
              while contributing to sustainable and green mobility.
            </p>
          </ScrollFx>
          <ScrollFx duration={1.2}>
            <button
              onClick={() => {
                navigate("/product");
              }}
              className='px-4 py-2 text-lg rounded-md font-semibold font-afacad-flux border hover:bg-gradient-to-tr from-purple-800 to-maroon transition-all duration-300 ease-in'>
              Learn More
            </button>
          </ScrollFx>
        </div>
      </section>
    </div>
  );
};

export default Services;
