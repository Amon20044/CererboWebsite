"use client";
import React, { useState } from 'react';
import ProfileCard from "../../components/ProfileCard";
import { motion } from "framer-motion";

function Team() {
  const [activeEvent, setActiveEvent] = useState("Presidents");

  const eventHandler = (eventName) => {
    setActiveEvent(eventName);
  };

  return (
    <div className="px-4">
      <div className='flex flex-col items-center mt-5'>
        <h1 className='text-white text-3xl md:text-4xl'>OUR TEAM</h1>
        <div className="flex flex-wrap justify-center mt-6 space-x-3 space-y-2">
          {[
            "Presidents",
            "Web Dev Team",
            "Sponsorship Team",
            "Public Relation Team",
            "Logistics Team",
            "On-Ground Team",
            "Design Team",
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

      {/* Presidents*/}
      {activeEvent === 'Presidents' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Vaibhav Jonwal", position: "GYMKHAHA PRESIDENT" },
              { name: "Amon Sharma", position: "TECH. COMMITTEE PRESIDENT" },
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
                  team="web_dev"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Sponsorship Team*/}
      {activeEvent === 'Sponsorship Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Tushant Akar", position: "LEAD" },
              { name: "Yatharth Shivhare", position: "LEAD" },
              { name: "Ziyan Solkar", position: "Co-LEAD" },
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
                  team="sponsorship"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Vinit Khandelwal", position: "Member" },
              { name: "Sourabh", position: "Member" },
              { name: "Priyanka Lotiya", position: "Member" },
              { name: "Karan Lokchandani", position: "Member" },
              { name: "Anuj Saha", position: "Member" },
              { name: "Anika Garg", position: "Member" },
              { name: "Aesha Ladani", position: "Member" },
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
                  team="sponsorship"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* Design Team */}
      {activeEvent === 'Design Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Amon Sharma", position: "LEAD" },
              { name: "Rishabh Ahlawat", position: "LEAD" },
              { name: "Mhd. Anas", position: "CO-LEAD" },
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
                  team="design"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Shreetej Meshram", position: "Member" },
              { name: "Srushti Chewale", position: "Member" },
              { name: "Devyash Saini", position: "Member" }, 
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
                  team="design"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* On-Ground Team */}
      {activeEvent === 'On-Ground Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Kunj Thakkar", position: "LEAD" },
              { name: "Dhruv Sachdeva", position: "LEAD" },
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
                  team="on_ground"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Ansh", position: "Member" },
              { name: "Karan", position: "Host" },
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
                  team="on_ground"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* Logistics Team*/}
      {activeEvent === 'Logistics Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Sanket Trivedi", position: "LEAD" },
              { name: "Maurya Patel", position: "LEAD" },
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
                  team="logistics"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Devanshi", position: "Member" },
              { name: "Karan", position: "Member" },
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
                  team="logistics"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/*Public Relation Team*/}
      {activeEvent === 'Public Relation Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Shubham Gupta", position: "LEAD" },
              { name: "Palkush Dave", position: "LEAD" },
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
                  team="public_relations"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Vinay Saini", position: "Member" },
              { name: "Nitin Kumar", position: "Member" },
              { name: "Anuj Saha", position: "Member" },
              { name: "Mohmed Husain", position: "Member" },
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
                  team="public_relations"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* Web Dev Team */}
      {activeEvent === 'Web Dev Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Amon Sharma", position: "LEAD" },
              { name: "Kaustubh Duse", position: "LEAD" },
              { name: "Devyash Saini", position: "CO-LEAD" },
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
                  team="web_dev"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[
              { name: "Jaydeep Bejoy", position: "Member" },
              { name: "Ansh", position: "Member" },
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
                  team="web_dev"
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