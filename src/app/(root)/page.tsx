import React from 'react'
import Image from 'next/image';

import { images } from '@/constants/images';
import PawCard from '@/components/PawCard';
import { getPets } from '@/services/pets';


async function Home() {
  const pets = await getPets();
  return (
    <>
      <section className='relative h-150 bg-green-400'>
        <Image {...images.splash} className='h-150 object-cover'/>
      </section>
      {/* <h1 className="text-2xl font-semibold">{ process.env.MONGODB_URI }</h1> */}

      {/* <h1 className="text-2xl font-semibold">Pet Count: { pets.length }</h1> */}
      <main className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
        <div className='grid gap-4 mt-4 ml-4 mb-4'>
          <PawCard details={images.image1}/>
          <PawCard details={images.image2}/>
          <PawCard details={images.image3}/>
        </div>
        <div className='grid gap-4 m-4'>
          <PawCard details={images.cats1}/>
          <PawCard details={images.image2}/>
          <PawCard details={images.image3}/>
        </div>
        <div className='grid gap-4 m-4'>
          { pets.map(pet => <PawCard details={pet} key={pet.alt}/>)}
        </div>
      </main>
    </>
  )
}

export default Home