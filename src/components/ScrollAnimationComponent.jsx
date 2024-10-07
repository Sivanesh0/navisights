import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollAnimationComponent = ({
  children,
  yOffset = 0,
  duration = 0.7,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: yOffset } : { opacity: 0, y: 50 }}
      transition={{ duration: duration }}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimationComponent;
