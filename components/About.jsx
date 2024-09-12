import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import portal from '../assets/LandingArea/Portal.png';
import Carousel from './Carousel'; // Import the Carousel component

function About() {
  return (
    <div className='flex flex-col lg:flex-row content-center items-center justify-center bg-[#212121] w-screen px-28 max-lg:p-12 max-lg:px-4'>
      
      {/* Animate the portal image */}
      <motion.div 
        className='w-full flex lg:w-[30%] min-h-[auto] lg:min-h-screen items-center justify-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src={portal}
          width={300}
          height={300}
          alt="Cerebro Logo"
          className="mb-4"
        />
      </motion.div>

      {/* Animate text section */}
      <motion.div 
        className='w-full flex-col flex lg:w-[70%] min-h-[auto] px-20 max-lg:px-4'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <motion.p 
          className='text-white pb-4 max-lg:text-6xl text-7xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The Beta Test
        </motion.p>

        <div className='w-full h-[3px] bg-white mt-6'></div>

        <motion.div 
          className='py-4 text-sm font-inter mb-3'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Back in 2013, Cerebro was like a beta test of epic proportions. No one really knew what they were doing (not that anyone would admit it), but everyone was excited to finally have a technical fest to call their own. It was the dawn of the Wi-Fi struggle, where students tested both their knowledge and their patience. Ideas clashed, laptops crashed, and the coffee machines worked harder than anyone else. Little did we know, this chaotic trial run would evolve into the intellectual showdown we proudly host today!
        </motion.div>

        <div className='w-full h-[3px] mb-12 bg-white'></div>

        {/* Use the Carousel component here */}
        <Carousel />
      </motion.div>
    </div>
  );
}

export default About;
