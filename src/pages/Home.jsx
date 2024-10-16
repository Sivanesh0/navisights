import React from "react";
import MyParticles from "../components/MyParticles";
import ScrollAnimationComponent from "../components/ScrollAnimationComponent";
import Model from "../components/Model";
import ScrollNumber from "../components/ScrollNumber";

const testimonials = [
  {
    name: "Sriram Sankaran",
    role: "Entrepreneur, Angel Investor",
    message:
      "You've got my attention—keep pushing forward. I believe success is within your reach in the near future.",
    image: "/testimonials/sriram-sankaran.png",
  },
  {
    name: "Balakumar Thangavelu",
    role: "Director Cognizant - CSR, India Head - Employee Volunteering & ESG",
    message:
      "You're on the path to greatness. With your passion for innovation, you could very well be the next Elon Musk. Don't ever let go of your drive for creating groundbreaking solutions.",
    image: "/testimonials/balakumaran-thangavelu.png",
  },
  {
    name: "Sri. C. Valliappa",
    role: "Chairman - Sona Group of Institutions",
    message:
      "This is an exceptional product—helpful and innovative, addressing various needs across different areas. It holds great potential for making a meaningful impact.",
    image: "/testimonials/valliappa.png",
  },
  {
    name: "Sathasivam Kannupayan",
    role: "Runner up -  Indium Wheelchair Tennis National Ranking Tournament",
    message:
      "It's fantastic to see such an innovative product coming from you. I’m confident there's a significant market for it, and as a potential customer, I’m eager to learn more.",
    image: "/testimonials/sathasivam.png",
  },
];

const Home = () => {
  return (
    <div className='relative'>
      {/* Hero Section */}
      <div className='relative md:px-6 grid md:grid-cols-2 items-center min-h-screen overflow-hidden w-full text-white font-raleway'>
        {/* Particles */}
        <div className='absolute w-full h-full'>
          <MyParticles />
        </div>
        {/* Welcome text */}
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
      {/* Performance Specs */}
      <section className='py-10'>
        <div className='flex w-1/2 flex-col md:flex-row items-center justify-around mx-auto'>
          <ScrollNumber
            targetNumber={25}
            unit={"KM/HR"}
            title={"Maximum Speed"}
          />
          <ScrollNumber
            targetNumber={100}
            unit={"KG"}
            title={"Payload Capacity"}
          />
          <ScrollNumber
            targetNumber={250}
            unit={"KG"}
            title={"Total Vehicle Weight"}
          />
        </div>
      </section>
      {/* Tagline/Moto */}
      <section className='py-16'>
        <ScrollAnimationComponent duration={1.2}>
          <img src='/moto.png' className=' md:w-1/2 mx-auto' alt='moto' />
        </ScrollAnimationComponent>
      </section>
      {/* Quote */}
      <div className='md:text-center font-raleway text-2xl py-32 bg-[url("/black-texture.png")] bg-background text-white'>
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
            When EV and AI combine, the empowerment of all is assured.
          </blockquote>
        </ScrollAnimationComponent>
      </div>
      {/* Vision and Aim */}
      <div className='font-raleway text-2xl px-4 md:text-left md:px-0 py-16 bg-[url("/cubes.png")] bg-black text-white'>
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
          <ScrollAnimationComponent duration={1.3}>
            <a
              className='px-4 py-2 text-xl rounded-md font-semibold font-afacad-flux border hover:bg-gradient-to-tr from-purple-800 to-maroon transition-all duration-300 ease-in'
              href='https://forms.gle/9nACqGTVZUGbh1TW8'
              target='_blank'>
              Have Queries?
            </a>
          </ScrollAnimationComponent>
        </div>
      </div>
      {/* Supporting Institutions and Organisations */}
      <section className='px-4 py-16 bg-[#F8F9FB]'>
        <div className='mx-auto md:w-2/3 space-y-5'>
          <ScrollAnimationComponent>
            <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text py-1'>
              Our Supporting Institutions and Organisations
            </h1>
          </ScrollAnimationComponent>
          {/* Institutions */}
          <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4'>
            <ScrollAnimationComponent duration={1.1}>
              <img
                className='w-24 md:w-32'
                src='/institutions/iit-hyd.png'
                alt='iit-hyd'
              />
            </ScrollAnimationComponent>
            <ScrollAnimationComponent duration={1.2}>
              <img className='w-40' src='/institutions/build.png' alt='build' />
            </ScrollAnimationComponent>
            <ScrollAnimationComponent duration={1.3}>
              <img
                className='w-48'
                src='/institutions/lions-club.png'
                alt='lions-club'
              />
            </ScrollAnimationComponent>
            <ScrollAnimationComponent duration={1.4}>
              <img
                className='w-40'
                src='/institutions/itic-hyd.png'
                alt='itic-hyd'
              />
            </ScrollAnimationComponent>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className='px-4 py-16 bg-black'>
        <div className='mx-auto md:w-2/3 space-y-5'>
          <ScrollAnimationComponent>
            <h1 className='font-afacad-flux text-5xl font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text py-1'>
              Expert Testimonials
            </h1>
          </ScrollAnimationComponent>
          <div className='grid grid-cols-1 gap-4 items-center'>
            {testimonials.map((test, index) => (
              <ScrollAnimationComponent
                key={index}
                duration={1.0 + index * 0.1}>
                <Testimonial {...test} index={index} />
              </ScrollAnimationComponent>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Testimonial = ({ name, image, message, role, index }) => {
  return (
    <figure
      className={`md:flex ${
        index % 2 !== 0 && "md:flex-row-reverse"
      } overflow-hidden text-white rounded-xl p-8 md:p-0 bg-background`}>
      <img
        className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
        src={image}
        alt={name}
      />
      <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
        <blockquote>
          <p className='text-xl font-cormorant-garamond font-medium'>
            “{message}”
          </p>
        </blockquote>
        <figcaption className='font-afacad-flux'>
          <div className='text-purple-600 font-raleway text-lg font-bold'>
            {name}
          </div>
          <div className='text-slate-400'>{role}</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Home;
