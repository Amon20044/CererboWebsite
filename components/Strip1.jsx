import React from 'react';
import Events from '../assets/LandingArea/Events.svg';
import Participants from '../assets/LandingArea/Participants.svg';
import Since2013 from '../assets/LandingArea/Since2013.svg';
import Prizes from '../assets/LandingArea/Prizes.svg';
import Image from 'next/image';

function Strip1() {
  return (
    <div className="w-screen h-auto bg-white py-8 px-6 md:px-12">
      {/* Use grid on small screens and flex on larger screens */}
      <div className="grid grid-cols-2 gap-8 md:flex md:justify-between">
        <div className="flex justify-center">
          <Image
            src={Since2013}
            alt="cerebro 2024-25"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={Participants}
            alt="cerebro 2024-25"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={Prizes}
            alt="cerebro 2024-25"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={Events}
            alt="cerebro 2024-25"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Strip1;
