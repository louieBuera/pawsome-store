import React from 'react'
import Image from 'next/image';
import { images } from '@/constants/images';
import PawCard from '@/components/PawCard';

const { splash } = images;

function Home() {
  return (
    <>
      <section className='relative h-150 bg-green-400'>
        <Image {...splash} className='h-150 object-cover'
        />
      </section>
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
      </main>
    </>
  )
}

export default Home