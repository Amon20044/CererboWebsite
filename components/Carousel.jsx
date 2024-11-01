'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Import images correctly
import img1 from '../assets/LandingArea/Image6.jpg';
import img2 from '../assets/LandingArea/Image5.jpg';
import img3 from '../assets/LandingArea/Image3.jpg';
import img4 from '../assets/LandingArea/Image4.jpg';

const images = [img1, img2, img3, img4]; // Use the imported images

function Carousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className='flex flex-row'>
        {images.map((img, index) => (
          <div key={index} className='w-1/4 p-2 cursor-pointer' onClick={() => openImage(img)}>
            <Image src={img} alt={`Carousel Image ${index + 1}`} width={200} height={200} className='object-cover' />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
          <div className='relative'>
            <button onClick={closeImage} className='absolute top-4 right-4 text-white text-2xl'>
              &times;
            </button>
            <Image src={selectedImage} alt='Full Screen' width={800} height={600} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
