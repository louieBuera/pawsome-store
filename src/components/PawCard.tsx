import React from 'react'
import Image from 'next/image';

import { ImageDetails } from '@/constants/images'

function PawCard({
  details: {src, alt, width, height}
}: { details: ImageDetails }) {
  return <div className='relative flex'>
    <Image className="h-auto rounded-lg w-full object-cover"
      src={src} alt={alt} width={width} height={height}
    />
    <div className="absolute flex flex-col z-10 bg-amber-400 opacity-35 justify-center items-center"
      style={{
        bottom: 0,
        left: '50%',
        transform: `translateX(-50%)`,
        opacity: 0.8
      }}
    >
      <h1 className='text-white text-2xl p-3 font-bold text-center'>{ alt }</h1>
    </div>
  </div>
}

export default PawCard