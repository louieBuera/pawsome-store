import React from 'react'

import Link from 'next/link';
import SessionButton from '@/components/SessionButton';
import SessionChecker from '@/components/SessionChecker';

function Navbar() {
  return (
    <header className='px-5 py-3 bg-white-70 font-work-sans'>
      <nav className='flex justify-around items-center'>
        <Link href="/" className='text-2xl m-5 font-semibold'>
          Home
          {/* <Image src="/next.svg" alt="logo" width={144} height={30}/> */}
        </Link>
        <SessionChecker>
          <Link href="/pets" className='text-2xl m-5 font-semibold'>
            Pets
            {/* <Image src="/next.svg" alt="logo" width={144} height={30}/> */}
          </Link>
          <Link href="/pets/add" className='text-2xl m-5 font-semibold'>
            Add Pet
            {/* <Image src="/next.svg" alt="logo" width={144} height={30}/> */}
          </Link>
        </SessionChecker>
        <SessionButton className='m-3 flex flex-row'/>
      </nav>
    </header>
  )
}

export default Navbar