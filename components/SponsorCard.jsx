import React from 'react';
import FigmaImg from '../assets/sponsorsPage/FigmaImg.svg';
import Image from 'next/image';

function SponsorCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center tracking-wide font-elevon text-white">TITLE SPONSORS</h1>
      <Image src={FigmaImg} width={200} height={100} alt="image" className="py-4 m-4" />
    </div>
  );
}

export default SponsorCard;
