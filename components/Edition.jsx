import React from 'react';
import Prizes from '../assets/LandingArea/Prizescb.svg';
import Participant from '../assets/LandingArea/Participantscb.svg';
import Event from '../assets/LandingArea/Eventscb.svg';
import Day from '../assets/LandingArea/Daycb.svg';
import Image from 'next/image';

function Edition() {
  return (
    <div className='flex flex-row bg-[#212121] w-screen min-h-screen p-12 max-lg:p-4'>    
      <div 
        className='w-full flex-col flex min-h-[auto] px-40 pt-12 max-lg:px-4'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <p 
          className='text-white py-4 max-lg:text-4xl text-7xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          The 11th Edition
        </p>

        <div className='w-full h-[3px] bg-white mt-6'></div>

        <div 
          className='py-4 text-sm font-inter mb-3'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
         Fast forward to 2024, and Cerebro is no longer a beta test—it’s a full-scale intellectual spectacle. What started as a scramble has evolved into a finely tuned, 7-day marathon of innovation and ideas. With the theme "Clash of Intellects: Human vs AI," this year promises to be bigger, louder, and smarter. We're expecting 2500+ participants from across India, battling it out in 15 signature events for a share of over 1.35L in prizes. If you thought the first edition was chaotic, buckle up, because this one is going to be legendary.
        </div>

        <div className='w-full h-[3px] mb-12 bg-white'></div>

        {/* Image components */}
        <div className='grid grid-cols-4 max-md:grid-cols-2 gap-6 px-14 max-md:px-4 pb-12'>
          <Image src={Prizes} alt="Prizes" width={150} height={150} />
          <Image src={Participant} alt="Participants" width={150} height={150} />
          <Image src={Event} alt="Events" width={150} height={150} />
          <Image src={Day} alt="Days" width={150} height={150} />
        </div>
      </div>
    </div>
  );
}

export default Edition;
