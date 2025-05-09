import React from 'react'

import Link from 'next/link';
import SessionButton from '@/components/SessionButton';

function Navbar() {
  return (
    <header className='px-5 py-3 bg-white-100 font-work-sans'>
      <nav className='flex justify-around items-center'>
        <Link href="/" className='text3xl m-5 font-semibold'>
          Home
          {/* <Image src="/next.svg" alt="logo" width={144} height={30}/> */}
        </Link>
        <Link href="/pets" className='text3xl m-5 font-semibold'>
          Pets
          {/* <Image src="/next.svg" alt="logo" width={144} height={30}/> */}
        </Link>
        <SessionButton className='m-3 flex flex-row'/>
      </nav>
    </header>
  )
}

export default Navbar