'use client';
import React, { useEffect, useRef } from 'react';
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

gsap.registerPlugin(ScrollTrigger);

const images = [cli1, cli2, cli3, cli4, cli5];

function LandingArea() {
  const imageRefs = useRef([]);
  const topLayerRefs = useRef([]);

  useEffect(() => {
    // Parallax effect for client images in the bottom layer
    imageRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        { y: -100 }, // Start position (off the top)
        {
          y: (index + 1) * 50, // End position (adjust as needed)
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
          y: 200 * (index + 1), // End position (adjust as needed)
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
  }, []);

  return (
    <div className="relative">
      {/* Top Layer */}
      <div className="absolute inset-0 topLayer z-0 translate-y-[10vh]">
        {/* Container with gradient background */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={cyborg}
              alt="Cyborg"
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#212121]">
            {/* Gradient background */}
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
      <div className="relative -z-10 flex flex-col items-center -translate-y-[15vh] justify-center min-h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className="p-6"
            ref={(el) => (imageRefs.current[index] = el)} // Assign refs for each image
          >
            <Image
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingArea;
