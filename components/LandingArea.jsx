'use client';
import React, { useEffect, useRef, useState } from 'react';
import cli2 from '../assets/LandingArea/cli1.svg';
import cli3 from '../assets/LandingArea/cli2.svg';
import cli4 from '../assets/LandingArea/cli3.svg';
import cli5 from '../assets/LandingArea/cli4.svg';
import cli1 from '../assets/LandingArea/cli5.svg';
import coi from '../assets/LandingArea/COI.svg';
import cyborg from '../assets/LandingArea/Cyborg.png';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import UnleashBanner from "../assets/LandingArea/UnleashBanner.svg"


gsap.registerPlugin(ScrollTrigger);

const desktopImages = [cli1, cli2, cli3, cli4, cli5];
const mobileImages = [cli1, ...Array(2).fill([cli4, cli3, cli2]).flat()];

function LandingArea() {
  const [isMobile, setIsMobile] = useState(false);
  const imageRefs = useRef([]);
  const topLayerRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Parallax effect for client images in the bottom layer
    imageRefs.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 100 }, // Start position (off the top)
        {
          y: (index + 1) * 25, // End position (adjust as needed)
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom', // Start animation when image enters the viewport
            end: 'bottom top',
            scrub: true, // Smooth parallax scroll
          },
        }
      );
    });

    // Parallax effect for top layer images
    topLayerRefs.current.forEach((el, index) => {
      gsap.fromTo(el,
        { y: 0 }, // Start position
        {
          y: 100 * (index + 1), // End position (adjust as needed)
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom', // Start animation when image enters the viewport
            end: 'bottom top',
            scrub: true, // Smooth parallax scroll
          },
        }
      );
    });
  }, [isMobile]); // Re-run effect when isMobile changes

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="relative">
      {/* Top Layer */}
      <div className="absolute inset-0 topLayer z-0 ">
        {/* Container with gradient background */}
        <div className="absolute w-screen  content-center top-0 left-0 h-full flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex justify-center items-center ">
            <Image
              src={cyborg}
              alt="Cyborg"
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
          <div className="absolute w-screen inset-0 bg-gradient-to-b from-transparent to-[#212121]">
            {/* Gradient background */}
          </div>
          <div className='relative w-screen h-auto bg-white items-center flex'>
          <Image
              src={UnleashBanner}
              alt="ub"   
              className="object-contain"
              objectFit="contain"
            />
          </div>
          
        </div>
        <div
          className="absolute bottom-0 right-0 w-full h-full flex justify-center items-center"
          ref={(el) => (topLayerRefs.current[1] = el)} // Assign ref for COI
        >
          <Image
            src={coi}
            alt="COI"
            layout="fill"
            objectFit="contain"
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Layer */}
      <div className="relative -z-10 flex flex-col justify-center ">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="p-6  max-[1050px]:px-3"
            ref={(el) => (imageRefs.current[index] = el)} // Assign refs for each image
            initial={{ opacity: 0 }} // Start with opacity 0
            animate={{ opacity: 1 }} // Transition to opacity 1
            transition={{ duration: 1, delay: index * 0.3 }} // Add delay for staggered effect
          >
            <Image
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full"
            />
          </motion.div>
        ))}
      </div>
      
      
    </div>
  );
}

export default LandingArea;