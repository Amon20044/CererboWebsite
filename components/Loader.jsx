"use client"
import { useEffect } from 'react';
import './Loader.css'; // Ensure this path is correct
import Image from 'next/image';
import Cerebro from "../assets/LandingArea/CerebroSvgStroke.svg"; // Path to the Cerebro logo

const Loader = ({ progress, isVisible, onTransitionEnd }) => {
  useEffect(() => {
    if (!isVisible) {
      // Trigger onTransitionEnd after the opacity transition ends
      const timer = setTimeout(() => {
        onTransitionEnd();
      }, 2000); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isVisible, onTransitionEnd]);

  return (
    <div className={`loader-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="loader">
        <div className="logo-container">
          <Image
            src={Cerebro}
            alt="Cerebro Logo"
            width={100} // Adjust size as needed
            height={100} // Adjust size as needed
            className="logo"
          />
        </div>
        <div className="progress">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
