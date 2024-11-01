"use client";
import React, { useEffect, useRef } from "react";
import sampleimg from "../assets/Profile/sample.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import gsap from "gsap";
import "./ProfileCard.css"; // Ensure you import the CSS file

const ProfileCard = (props) => {
  const cardRef = useRef(null);
  console.log(props.team);

  useEffect(() => {
    // GSAP animation for card entrance
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col items-center space-y-2 w-full max-w-[250px] mx-auto"
      whileInView={{ opacity: 1, scale: 1.05 }}
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flip-card-image-container relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <div className="flip-card-image relative w-full h-full">
          {/* Front Side */}
          <div className="flip-card-image-front absolute inset-0">
            <Image
              src={"/Teams/" + props.team + "/" + props.name + ".jpg"}
              alt="Sample"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          {/* Back Side */}
          <div className="flip-card-image-back absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl sm:text-2xl text-white" />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl sm:text-2xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-4">{props.name}</h1>
      <h2 className="text-sm sm:text-base text-gray-500">{props.position}</h2>
    </motion.div>
  );
};

export default ProfileCard;
