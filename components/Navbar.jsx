'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import cerebro from '../assets/LandingArea/cerebro.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  const NavLink = ({ href, children, className }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className={`px-4 py-2 text-white hover:bg-opacity-80 transition-colors ${className}`}
        onClick={(e) => {
          if (isMenuOpen) {
            e.preventDefault();
            handleLinkClick(href);
          }
        }}
      >
        {children}
      </Link>
    </motion.div>
  );

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <nav className="py-4 w-screen flex justify-center bg-transparent">
      <div className="container flex justify-between items-center px-4 bg-transparent">
        {/* Left side - Orange */}
        <div className="hidden md:flex space-x-4 bg-orange-500 rounded-xl px-6 py-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/merch">Merch</NavLink>
        </div>

        {/* Logo */}
        <div className="text-center py-2 px-4 flex justify-center">
          <Image
            src={cerebro}
            alt='cerebro 2024-25'
            
            className="max-w-full h-auto" // Ensures the logo scales responsively
          />
        </div>

        {/* Right side - Purple */}
        <div className="hidden md:flex space-x-4 bg-purple-500 rounded-xl px-6 py-6">
          <NavLink href="/sponsors">Sponsors</NavLink>
          <NavLink href="/team">Team</NavLink>
          <NavLink href="/contactUs">Contact Us</NavLink>
        </div>

        {/* Hamburger Menu */}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={toggleMenu} className="text-white">
            <Menu size={24} />
          </button>
        </motion.div>
      </div>

      {/* Full-screen Menu for Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-orange-500 to-purple-500"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={32} />
            </motion.button>
            <div className="flex flex-col space-y-6 text-4xl">
              <NavLink href="/">Home</NavLink>
              {['Events', 'Merch', 'Sponsors', 'Team', 'Contact Us'].map((item, i) => (
                <motion.div key={item} custom={i} variants={linkVariants}>
                  <NavLink href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white">{item}</NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
