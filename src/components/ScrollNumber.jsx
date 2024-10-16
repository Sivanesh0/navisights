import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollNumber = ({ targetNumber, unit, title }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = targetNumber;
      const duration = 2; // Duration in seconds
      const increment = Math.ceil(end / (duration * 60)); // Increment based on FPS

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, 1000 / 60); // 60 FPS

      return () => clearInterval(counter); // Cleanup on component unmount or when out of view
    } else {
      // Reset count when not in view if you want it to restart each time it's in view
      setCount(0);
    }
  }, [inView, targetNumber]);

  return (
    <div ref={ref} className='font-afacad-flux text-center'>
      <motion.h1
        className='text-transparent bg-gradient-to-tr from-purple-800 to-red bg-clip-text text-6xl md:text-8xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}>
        {count}
      </motion.h1>
      <h2 className='text-white text-3xl font-mono'>{unit}</h2>
      <h2 className='text-white font-raleway'>{title}</h2>
    </div>
  );
};

export default ScrollNumber;
