"use client"
import { useEffect, useState } from "react";
import LandingArea from '../components/LandingArea';
import Lenis from 'lenis'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import About from '../components/About';
import Strip1 from '../components/Strip1';
import Edition from '../components/Edition';
import UnleashBanner from "../assets/LandingArea/UnleashBanner.svg";
import CTA from "../assets/LandingArea/CTABanner.svg";
import Merch from "../components/Merch";
import Loader from '../components/Loader'; // Import the Loader component

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleProgress = () => {
      // Simulate loading progress (for demonstration purposes)
      // You can replace this with actual progress tracking if available
      let percent = 0;
      const interval = setInterval(() => {
        percent += 10; // Increment progress
        setProgress(percent);
        if (percent >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false); // Hide the loader after opacity transition
            setLoading(false); // Hide the loader when progress reaches 100%
          }, 2000); // Match the CSS transition duration
        }
      }, 500); // Update every 500ms
    };

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    handleProgress(); // Start the progress simulation

    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const handleLoaderTransitionEnd = () => {
    // This callback can be used if additional actions are needed after loader transition
  };

  return (
    <div className="flex flex-col w-screen overflow-x-hidden">
      {loading && (
        <Loader progress={progress} isVisible={isVisible} onTransitionEnd={handleLoaderTransitionEnd} />
      )}
      {!loading && (
        <>
          <div className="block"><LandingArea /></div>
          <div className="block"><About/></div>
          <div className="block"><Strip1/></div>
          <div className="block"><Edition/></div>
          <div className={`relative w-screen h-auto bg-white items-center flex max-md:scale-125`}>
                <Image src={CTA} alt="CTA Banner" className="object-contain" objectFit="contain" />
          </div>
          <div className="block">
            <Merch/>
          </div>
        </>
      )}
    </div>
  );
}
