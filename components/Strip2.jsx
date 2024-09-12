import React from 'react'

import UnleashBanner from "../assets/LandingArea/UnleashBanner.svg"
import Image from 'next/image'
function Strip2() {
  return (
    <div className='relative w-screen h-auto bg-white items-center flex'>
          <Image
              src={UnleashBanner}
              alt="ub"   
              className="object-contain"
              objectFit="contain"
            />
          </div>
  )
}

export default Strip2