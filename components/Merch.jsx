import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import tshirt from '../assets/LandingArea/TShirtCB.png'; // Assuming the t-shirt image is here
import Image from 'next/image';
import Merch3d from './Merch3d';

function Merch() {
  const tshirtRef = useRef(null);

  // GSAP Floating Animation
  useEffect(() => {
    if (tshirtRef.current) {
      gsap.to(tshirtRef.current, {
        y: -50,           // Moves the t-shirt up by 15px
        repeat: -1,       // Infinite loop
        yoyo: true,       // Go back and forth (up and down)
        duration: 2,      // Time for one float cycle
        ease: "power1.inOut" // Smooth easing
      });
    }
  }, []);

  return (
    <div className='min-h-screen w-screen flex flex-col md:flex-row py-12 md:px-32'>
      {/* Left Section: Text and Button */}
      <div className='w-full md:w-[60%] flex flex-col justify-center items-start p-6 md:p-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6'>
          Get the Official Cerebro Merch
        </h1>
        <p className='text-base md:text-lg text-gray-300 mb-4'>
          Wear the spirit of innovation with our limited edition merchandise. Available for a limited time, grab your official Cerebro T-Shirt now!
        </p>
        <button onClick={() => window.open("https://forms.gle/ZTxzNg33Txh9KUdw9")} className='px-4 py-2 md:px-6 md:py-3 bg-[#E63946] text-white font-semibold rounded-md hover:bg-[#D62839] transition duration-300'>
          Buy Now
        </button>
      </div>

      {/* Right Section: Floating Image */}
      <div className='w-full md:w-[40%] flex justify-center items-center p-6 md:p-12'>
        {/* Apply floating effect using GSAP */}
        {/* <motion.div
          ref={tshirtRef}
          className="relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        > */}
          {/* <Image
            src={tshirt}
            alt="Cerebro T-Shirt"
            width={300}
            height={300}
            className="w-auto h-auto"
          /> */}
          <Merch3d />
        {/* </motion.div> */}
      </div>
    </div>
  );
}

export default Merch;
