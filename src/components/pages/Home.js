import { motion } from "framer-motion";
import useOnScreen from "../utils/OnScreen";
import About from "../content/About";
import ContactUs from "../content/ContactUs";
import WhatWeDo from "../content/WhatWeDo";

export default function Home() {
  const [ref, isVisible] = useOnScreen();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className="bg-base-200">
      <div className="flex flex-col md:flex-row items-start justify-around p-4 md:px-48">
        <About />
      </div>
      <div className="divider divider-vertical before:bg-neutral after:bg-neutral mx-20"></div>
      <motion.h2
        ref={ref}
        className="text-center text-6xl m-6 font-Oswald text-primary"
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        What We Do
      </motion.h2>
      <div className="flex flex-col sm:flex-row justify-around px-4 sm:px-8 md:px-44 py-4">
        <WhatWeDo />
      </div>
      <div className="divider divider-vertical before:bg-neutral after:bg-neutral mx-20"></div>
      <motion.h2
        className="text-center text-6xl m-6 font-Oswald text-primary"
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        Contact Us
      </motion.h2>
      <ContactUs />
    </motion.div>
  );
}
