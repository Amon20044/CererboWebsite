'use client';
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaLinkedin, FaDiscord, FaTwitter } from 'react-icons/fa';
import cb from '../assets/LandingArea/Cb.svg'
const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="footer-container flex flex-col md:flex-row justify-between mx-auto px-6 md:px-16">
        {/* Left Side */}
        <div className="footer-item footer-left flex-1">
          <Image
            src={cb}
            alt="Cerebro Logo"
            className="mb-4"
          />
          <p className="text-black mb-4 max-md:py-4">
            Fueling Innovation. Igniting Curiosity, and Shaping the Future of Tech—One Idea at a Time.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={25} className="text-black hover:text-gray-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={25} className="text-black hover:text-gray-500" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={25} className="text-black hover:text-gray-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={25} className="text-black hover:text-gray-500" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-item footer-middle flex-1 max-md:py-4">
          <h4 className="text-lg font-bold mb-2 text-black">Contact Us</h4>
          <p className="text-black">
            📞 +91 95318 52385 <br />
            ✉️ cerebro@iiitvadodara.ac.in
          </p>
        </div>

        {/* Right Side */}
        <div className="max-md:py-4 footer-item footer-right flex-1">
          <h4 className="text-lg font-bold mb-2 text-black">Join Us Offline</h4>
          <p className="text-black">
            Block No.9 (CIC Department), Government Engineering College,
            Sector 28 GIDC, Gandhinagar, Gujarat 382028
          </p>
        </div>
      </div>

      <div className="text-center mt-6 max-md:py-4 text-black">
        © 2024 Cerebro IIITV
      </div>
    </footer>
  );
};

export default Footer;
