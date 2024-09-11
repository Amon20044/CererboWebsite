"use client"
import { useEffect } from "react";
import LandingArea from '../components/LandingArea';
import Lenis from 'lenis' // Ensure Lenis is imported correctly
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import About from '../components/about';
import UnleashBanner from "../assets/LandingArea/UnleashBanner.svg"

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Duration of the smooth scroll effect
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Easing function for smooth effect
    });

    // Lenis scroll event listener
    lenis.on('scroll', (e) => {
      console.log(e); // Log the scroll event (useful for debugging)
    });

    // Update GSAP's ScrollTrigger on each scroll
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Sync Lenis with GSAP ticker for smooth RAF (RequestAnimationFrame)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Time is converted for smoother updates
    });

    // Disable lag smoothing for GSAP to avoid any lag issues
    gsap.ticker.lagSmoothing(0);

    // Cleanup function to remove the ticker when the component unmounts
    return () => {
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="flex flex-col w-screen overflow-x-hidden">
      {/* LandingArea Component containing GSAP animations */}
      <div className="block"><LandingArea /></div>
      <div className="block"><About/></div>
    </div>
  );
}
