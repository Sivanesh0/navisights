import React from "react";

const features = [
  {
    title: "Autonomous Navigation",
    content: [
      "The vehicle uses advanced autonomous navigation technologies to self-drive within pre-mapped closed environments (e.g., hospitals, campuses).",
      "Automated pathfinding and obstacle avoidance ensure safe travel without human intervention.",
    ],
  },
  {
    title: "Voice Recognition and NLP",
    content: [
      "Implementing voice control through Natural Language Processing (NLP) allows users to control the vehicle via voice commands, enhancing accessibility, especially for disabled and hospitalized individuals.",
      'Commands such as "start,"" "stop," and setting destination points are processed through a voice-recognition interface, making the system intuitive and user-friendly.',
    ],
  },
  {
    title: "App-Based Remote Control",
    content: [
      "A mobile app will provide users with remote access to the vehicle, allowing them to track, monitor, and control the trike in real-time.",
      "The app will also enable features such as selecting a destination, checking battery status, and sending the vehicle to a specific location.",
    ],
  },
  {
    title: "Autonomous Mapping and Environment Awareness",
    content: [
      "The vehicle integrates automated mapping systems to navigate closed ecosystems, like campuses or industrial facilities, ensuring precise and smooth travel across mapped zones.",
      "Dynamic environment updates will allow the vehicle to respond in real-time to changes in its surroundings, like moving obstacles or altered paths.",
    ],
  },
  {
    title: "Accessibility Features",
    content: [
      "The vehicle is designed to improve mobility for disabled and hospitalized users by offering a hands-free, autonomous mode of transport.",
      "It supports easy boarding and alighting, with focus on comfort and safety during travel.",
    ],
  },
  {
    title: "Sustainability and Eco-Friendly Design",
    content: [
      "Powered by electric systems, the NextGen Trike operates on clean energy, contributing to reduced carbon emissions and promoting eco-friendly transportation within institutions.",
    ],
  },
];

const specifications = [
  {
    icon: "/control-system.png",
    title: "Autonomous Control System",
    content: [
      "Automated control system utilizing pre-mapped environments for route planning and real-time navigation.",
      "The system integrates multiple sensors for obstacle detection, ensuring smooth and collision-free operation in closed environments.",
    ],
  },
  {
    icon: "/voice-recognition.png",
    title: "Voice Recognition and NLP",
    content: [
      "Implementing voice-recognition technology integrated with Natural Language Processing (NLP) allows the vehicle to understand and respond to spoken commands.",
      "This system will enable hands-free control, improving usability for individuals with mobility challenges.",
    ],
  },
  {
    icon: "/cloud-integration.png",
    title: "App and Cloud Integration",
    content: [
      "Users can monitor and control the vehicle using a dedicated mobile app with real-time tracking, route selection, and status updates.",
      "Cloud-based data storage and analytics can be used for performance monitoring and predictive maintenance.",
    ],
  },
  {
    icon: "/battery-charging.png",
    title: "Battery and Charging",
    content: [
      "The vehicle will be powered by a high-capacity battery system, optimized for long operational hours within closed environments.",
      "Features fast-charging capabilities to ensure minimal downtime during daily operations.",
    ],
  },
];

const uses = [
  {
    image: "/disabled-people.jpg",
    title: "Improved Mobility for Disabled and Hospitalized Individuals",
    content: [
      "By implementing voice-controlled, autonomous features, the vehicle provides independence and mobility for people with limited physical abilities.",
      "It eliminates the need for manual assistance and offers a dignified mode of transport within healthcare and rehabilitation centers.",
    ],
  },
  {
    image: "/ambulance.jpg",
    title: "Efficient Transportation in Closed Ecosystems",
    content: [
      "Ideal for use in institutional environments like hospitals, universities, and industrial facilities, where frequent transportation across large areas is needed.",
      "Reduces the need for human-driven vehicles, optimizing time and improving overall operational efficiency.",
    ],
  },
  {
    image: "/self-driving-car.jpg",
    title: "Enhanced Accessibility and User Experience",
    content: [
      "The use of NLP-driven voice recognition allows users to easily interact with the vehicle, ensuring a smooth experience for individuals with special needs.",
      "The app-based remote control provides flexibility in usage, allowing users or caregivers to manage transportation needs seamlessly.",
    ],
  },
  {
    image: "/plains-road.jpg",
    title: "Environmentally Sustainable Transportation",
    content: [
      "As a fully electric vehicle, it offers an eco-friendly alternative to traditional gasoline-powered transportation, significantly reducing environmental impact.",
      "Institutions can achieve their sustainability goals while offering better transportation solutions.",
    ],
  },
];

const images = [
  "view-1.jpg",
  "view-2.jpg",
  "view-3.jpg",
  "view-4.jpg",
  "view-5.jpg",
  "view-6.jpg",
  "view-7.jpg",
  "view-8.jpg",
];

const Product = () => {
  return (
    <div className='relative text-white bg-black'>
      {/* Problem Statement */}
      <section className='md:w-2/3 mx-auto space-y-6 py-16 px-4 md:px-0'>
        <h1 className='text-5xl font-afacad-flux font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
          Problem Statement
        </h1>
        <p className='font-cormorant-garamond text-2xl'>
          &#8220;The blind, elderly, and hospitalized individuals lack
          independence and face challenges in traveling safely and confidently.
          People struggle with mobility within or outside closed ecosystems like
          campuses, corporate complexes, and industrial facilities, leading to
          inefficiencies and environmental concerns.&#8221;
        </p>
      </section>
      {/* Features, Specifications, Uses */}
      <section className='bg-[url("/cubes.png")] py-16 px-4 md:px-0'>
        <div className='md:w-2/3 mx-auto space-y-6'>
          <h1 className='md:text-center text-5xl md:text-7xl font-raleway font-light'>
            NextGen Trike
          </h1>
          <hr className='border-dashed' />
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {images.map((image, index) => (
              <img
                key={index}
                className='w-full h-auto object-cover'
                src={image}
                alt={`View ${index + 1}`}
              />
            ))}
          </div>
          <hr className='border-dashed' />
          {/* Features */}
          <h1 className='font-afacad-flux text-4xl md:text-center'>
            Vehicle Features
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='font-raleway font-light cursor-pointer md:hover:scale-105 transition-all ease-in duration-200 space-y-3 text-pretty'>
                <h1 className='font-normal text-6xl font-afacad-flux'>
                  0{index + 1}
                </h1>
                <hr />
                <h1 className='text-lg font-semibold'>{feature.title}</h1>
                <div className='space-y-4 text-sm font-cormorant-garamond font-light'>
                  {feature.content.map((text, t_index) => (
                    <p key={t_index}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <hr className='border-dashed' />
          {/* Specifications */}
          <h1 className='font-afacad-flux text-4xl md:text-center'>
            Vehicle Specifications
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
            {specifications.map((feature, index) => (
              <div
                key={index}
                className='font-raleway font-light cursor-pointer md:hover:scale-105 transition-all ease-in duration-200 space-y-3 text-center border px-4 py-11 rounded-lg bg-background'>
                <div className='flex items-center justify-center p-4 size-24 mx-auto border rounded-lg bg-black'>
                  <img
                    className='mx-auto size-12'
                    src={feature.icon}
                    alt={feature.title}
                  />
                </div>
                <h1 className='text-lg font-semibold'>{feature.title}</h1>
                <div className='space-y-2 text-justify text-sm font-cormorant-garamond font-light'>
                  {feature.content.map((text, t_index) => (
                    <p key={t_index}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Uses */}
      <section className='bg-[url("/black-texture.png")] py-16 px-4 md:px-0 bg-black'>
        <div className='md:w-2/3 mx-auto space-y-12'>
          <h1 className='text-5xl font-afacad-flux font-semibold text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text'>
            Uses of the NextGen Trike
          </h1>
          <div className='space-y-8'>
            {uses.map((use, index) => (
              <div
                key={index}
                className='font-raleway font-light cursor-pointe space-y-3 text-pretty'>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } justify-between gap-4 w-full`}>
                  <div className='md:w-1/2 max-h-60 overflow-hidden'>
                    <img
                      className='w-full object-bottom mx-auto'
                      src={use.image}
                      alt={use.title}
                    />
                  </div>
                  <div className='md:w-1/2'>
                    <h1 className='text-3xl font-semibold'>{use.title}</h1>
                    <div className='space-y-4 text-lg font-cormorant-garamond font-light'>
                      {use.content.map((text, t_index) => (
                        <p key={t_index}>{text}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <hr className='border-dashed' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
