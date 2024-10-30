// components/Card.js
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import "./Card.css";

const Card = ({ title, prize, description, image, link }) => {
  const cardRef = useRef(null);

  // GSAP Animation
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  // Framer Motion Variants
  const hoverEffect = {
    scale: 1.05,
    rotate: 0,
    boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  };

  const handleRedirect = () => {
    window.location.href = link;
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-[rgba(255,255,255,0.05)] w-full md:max-w-[55%] px-[2%] py-[3%] rounded-lg shadow-lg items-center flex flex-col md:flex-row border border-[rgba(255,255,255,1)]"
      whileHover={hoverEffect}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image Section */}
      <div className="w-1/2 flex justify-center">
        <Image
          src={image}
          alt={title}
          width={280}
          height={150}
          className="rounded-md object-contain md:max-h-[40rem] max-h-[10rem]"
        />
      </div>

      {/* Text Content Section */}
      <div className="space-y-4 text-center w-full md:w-1/2">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-lg font-sans text-gray-300">{description}</p>
        <h1 className="text-yellow-400 text-2xl font-semibold">{prize}</h1>

        {/* Centered Button */}
        <div className="flex p-12 justify-center" onClick={handleRedirect}>
          <button className="button">
            <div className="bg"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 342 208"
              height="208"
              width="342"
              className="splash"
            ></svg>

            <div className="wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 221 42"
                height="42"
                width="221"
                className="path"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
                ></path>
              </svg>

              <div className="outline"></div>
              <div className="content">
                <span className="char state-1">
                  <span data-label="R" style={{ "--i": 1 }}>
                    R
                  </span>
                  <span data-label="e" style={{ "--i": 2 }}>
                    e
                  </span>
                  <span data-label="g" style={{ "--i": 3 }}>
                    g
                  </span>
                  <span data-label="i" style={{ "--i": 4 }}>
                    i
                  </span>
                  <span data-label="s" style={{ "--i": 5 }}>
                    s
                  </span>
                  <span data-label="t" style={{ "--i": 6 }}>
                    t
                  </span>
                  <span data-label="e" style={{ "--i": 7 }}>
                    e
                  </span>
                  <span data-label="r" style={{ "--i": 8 }}>
                    r
                  </span>
                </span>

                <div className="icon">
                  <div></div>
                </div>

                <span className="char state-2">
                  <span data-label="R" style={{ "--i": 1 }}>
                    R
                  </span>
                  <span data-label="e" style={{ "--i": 2 }}>
                    e
                  </span>
                  <span data-label="g" style={{ "--i": 3 }}>
                    g
                  </span>
                  <span data-label="i" style={{ "--i": 4 }}>
                    i
                  </span>
                  <span data-label="s" style={{ "--i": 5 }}>
                    s
                  </span>
                  <span data-label="t" style={{ "--i": 6 }}>
                    t
                  </span>
                  <span data-label="e" style={{ "--i": 7 }}>
                    e
                  </span>
                  <span data-label="r" style={{ "--i": 8 }}>
                    r
                  </span>
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
