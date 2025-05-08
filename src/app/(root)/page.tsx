import React from 'react'
import Image from 'next/image';
import { images, imageURLs } from '@/constants/images';

const { splash } = images;

function Home() {
  return (
    <>
      <section className='relative h-150 bg-green-400'>
        {/* <img src={imageURLs.splash} className='relative h-300 w-full' resizeMode/> */}
        <Image {...splash} className='h-150 object-cover'
        />
        <div className="absolute flex flex-col z-10 bg-red-400 opacity-35 justify-center items-center border-5 border-white"
          style={{
            bottom: 0,
            left: '50%',
            transform: `translateX(-50%)`,
            opacity: 0.8
          }}
        >
          {/* <h1 className='text-white text-3xl p-5 font-bold'>Puppy Watch</h1>
          <h1 className='bg-secondary px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative'>Sample</h1>
          <h1 className='text-white text-2xl p-5 font-bold'>See Puppies, Order Pet Supplies</h1> */}
        </div>
        {/* <h1 className='text-red-400'>Welcome</h1> */}

      </section>
      <main className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='grid gap-4 m-4'>
          <div className='relative'>
            <Image className="h-auto max-w-full rounded-lg w-full"
              {...images.image1}
            />
            <div className="absolute flex flex-col z-10 bg-amber-400 opacity-35 justify-center items-center"
              style={{
                bottom: 0,
                left: '50%',
                transform: `translateX(-50%)`,
                opacity: 0.8
              }}
            >
              <h1 className='text-white text-3xl p-5 font-bold text-center'>{ images.image1.alt }</h1>
            </div>
          </div>
          <div className='relative'>
            <Image className="h-auto max-w-full rounded-lg w-full"
              {...images.image2}
            />
            <div className="absolute flex flex-col z-10 bg-amber-400 opacity-35 justify-center items-center"
              style={{
                bottom: 0,
                left: '50%',
                transform: `translateX(-50%)`,
                opacity: 0.8
              }}
            >
              <h1 className='text-white text-3xl p-5 font-bold text-center'>{ images.image2.alt }</h1>
            </div>
          </div>
          <div className='relative'>
            <Image className="h-auto max-w-full rounded-lg w-full"
              {...images.image3}
            />
            <div className="absolute flex flex-col z-10 bg-amber-400 opacity-35 justify-center items-center"
              style={{
                bottom: 0,
                left: '50%',
                transform: `translateX(-50%)`,
                opacity: 0.8
              }}
            >
              <h1 className='text-white text-3xl p-5 font-bold text-center'>{ images.image3.alt }</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home