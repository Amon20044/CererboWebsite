"use client";
import React, { useState } from 'react';
import ProfileCard from "../../components/ProfileCard";
import { motion } from "framer-motion";

function Team() {
  const [activeEvent, setActiveEvent] = useState("Team1");

  const eventHandler = (eventName) => {
    setActiveEvent(eventName);
  };

  return (
    <div className="px-4">
      <div className='flex flex-col items-center mt-5'>
        <h1 className='text-white text-3xl md:text-4xl'>OUR TEAM</h1>
        <div className="flex flex-wrap justify-center mt-6 space-x-3 space-y-2">
          {[
            "Sponsorship Team",
            "Public Relation Team",
            "Logistics Team",
            "On-Ground Team",
            "Design Team",
            "Web Dev Team"
          ].map((event) => (
            <button
              key={event}
              className={`text-white text-lg md:text-xl px-3 py-2 md:px-4 md:py-2 rounded-md ${activeEvent === event ? "underline underline-offset-4 button-active" : ""}`}
              onClick={() => eventHandler(event)}
            >
              {event}
            </button>
          ))}
        </div>
      </div>

      {/* Web Dev Team */}
      {activeEvent === 'Web Dev Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "KAUSTUBH DUSE", position: "LEAD" },
              { name: "ABCD", position: "CO-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
              { name: "XYZ", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
